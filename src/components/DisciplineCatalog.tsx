"use client";

import { useMemo, useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Layers,
  LayoutGrid,
  Search,
  Star,
  X,
} from "lucide-react";
import {
  CATEGORIES,
  CategoryId,
  DISCIPLINES,
  Discipline,
  LANGUAGE_COLORS,
  getCategoryInfo,
  getLanguageStats,
} from "@/data/disciplines";

type SortOption = "recent" | "oldest" | "alpha";
type ViewMode = "grid" | "grouped";

function DisciplineCard({ discipline }: { discipline: Discipline }) {
  const category = getCategoryInfo(discipline.category);
  const langColor = LANGUAGE_COLORS[discipline.language] ?? "#64748b";

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${category.badgeClass}`}
          >
            {category.shortLabel}
          </span>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            {discipline.stars > 0 && (
              <span
                className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-700 ring-1 ring-amber-600/20"
                title="Estrelas no GitHub"
              >
                <Star className="h-3 w-3 fill-amber-400 text-amber-500" />
                {discipline.stars}
              </span>
            )}
            <span>{discipline.year}</span>
          </div>
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 transition group-hover:text-indigo-700">
          {discipline.title}
        </h3>

        <p
          className="mt-1 truncate font-mono text-xs text-slate-400"
          title={discipline.folderPath}
        >
          {discipline.folderPath}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {discipline.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {discipline.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600"
            >
              #{topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
          <span
            className="h-2.5 w-2.5 rounded-full ring-2 ring-slate-100"
            style={{ backgroundColor: langColor }}
          />
          {discipline.language}
        </span>

        <div className="flex items-center gap-2">
          <a
            href={discipline.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-600"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            Ver código
            <ExternalLink className="h-3 w-3 opacity-75" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function DisciplineCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">(
    "all"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [viewMode, setViewMode] = useState<ViewMode>("grouped");

  const languages = useMemo(() => getLanguageStats(), []);

  const filteredDisciplines = useMemo(() => {
    const query = search.trim().toLowerCase();

    const matches = DISCIPLINES.filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (selectedLanguage !== "all" && item.language !== selectedLanguage) {
        return false;
      }
      if (!query) return true;

      return (
        item.title.toLowerCase().includes(query) ||
        item.repoName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.language.toLowerCase().includes(query) ||
        item.topics.some((topic) => topic.toLowerCase().includes(query))
      );
    });

    return [...matches].sort((a, b) => {
      if (sortBy === "recent") {
        return b.year - a.year || a.title.localeCompare(b.title, "pt-BR");
      }
      if (sortBy === "oldest") {
        return a.year - b.year || a.title.localeCompare(b.title, "pt-BR");
      }
      return a.title.localeCompare(b.title, "pt-BR");
    });
  }, [search, selectedCategory, selectedLanguage, sortBy]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedCategory !== "all" ||
    selectedLanguage !== "all";

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedLanguage("all");
  };

  return (
    <section
      id="disciplinas"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Catálogo Completo
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Disciplinas Cursadas
          </h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Filtre por área, linguagem ou busque pelo nome da matéria ou
            tecnologia.
          </p>
        </div>

        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-xs self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode("grouped")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === "grouped"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Por Área
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === "grid"
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            Grade Única
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar disciplina, repositório, linguagem ou tema..."
              aria-label="Buscar disciplinas"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-9 pl-10 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Limpar busca"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Filtrar por linguagem"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700 transition focus:border-indigo-500 focus:bg-white focus:outline-none"
            >
              <option value="all">Todas as linguagens</option>
              {languages.map((lang) => (
                <option key={lang.language} value={lang.language}>
                  {lang.language} ({lang.count})
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              aria-label="Ordenar disciplinas"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700 transition focus:border-indigo-500 focus:bg-white focus:outline-none"
            >
              <option value="recent">Mais recentes</option>
              <option value="oldest">Mais antigas</option>
              <option value="alpha">Ordem alfabética (A–Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              selectedCategory === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            Todas ({DISCIPLINES.length})
          </button>

          {CATEGORIES.map((category) => {
            const count = DISCIPLINES.filter(
              (d) => d.category === category.id
            ).length;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {category.label} ({count})
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <X className="h-3.5 w-3.5" />
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Results Info */}
      <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
        <span>
          Exibindo{" "}
          <strong className="font-semibold text-slate-900">
            {filteredDisciplines.length}
          </strong>{" "}
          de {DISCIPLINES.length} repositórios
        </span>
      </div>

      {/* Results */}
      {filteredDisciplines.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <p className="text-base font-semibold text-slate-900">
            Nenhuma disciplina encontrada
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Tente ajustar os termos de busca ou limpar os filtros aplicados.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-600"
          >
            Mostrar todas as disciplinas
          </button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDisciplines.map((discipline) => (
            <DisciplineCard key={discipline.id} discipline={discipline} />
          ))}
        </div>
      ) : (
        <div className="mt-8 space-y-12">
          {CATEGORIES.map((category) => {
            const items = filteredDisciplines.filter(
              (d) => d.category === category.id
            );
            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <div className="mb-5 flex flex-col gap-1 border-b border-slate-200 pb-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.accentClass}`}
                      />
                      <h3 className="text-xl font-bold text-slate-900">
                        {category.label}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-semibold text-slate-600">
                        {items.length}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((discipline) => (
                    <DisciplineCard
                      key={discipline.id}
                      discipline={discipline}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
