import {
  ArrowDown,
  BookOpen,
  CalendarRange,
  Code2,
  FolderGit2,
  MapPin,
} from "lucide-react";
import {
  AUTHOR,
  CATEGORIES,
  DISCIPLINES,
  getLanguageStats,
} from "@/data/disciplines";

export function Hero() {
  const languageCount = getLanguageStats().length;
  const years = DISCIPLINES.map((d) => d.year);
  const yearRange = `${Math.min(...years)} – ${Math.max(...years)}`;

  const stats = [
    {
      label: "Disciplinas",
      value: DISCIPLINES.length.toString(),
      helper: "Unificadas neste repositório",
      icon: FolderGit2,
    },
    {
      label: "Áreas de Estudo",
      value: CATEGORIES.length.toString(),
      helper: "Eixos temáticos",
      icon: BookOpen,
    },
    {
      label: "Linguagens",
      value: languageCount.toString(),
      helper: "C, C++, TS, Python, Java...",
      icon: Code2,
    },
    {
      label: "Período",
      value: yearRange,
      helper: "Jornada acadêmica",
      icon: CalendarRange,
    },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 bg-white"
    >
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-medium text-indigo-800">
            <span>{AUTHOR.role}</span>
            <span className="text-indigo-300">•</span>
            <span className="font-mono">{yearRange}</span>
            <span className="text-indigo-300">•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {AUTHOR.location}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Disciplinas e Projetos da{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Graduação
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Um acervo organizado com os repositórios desenvolvidos ao longo da
            faculdade — passando por fundamentos de programação, estruturas de
            dados, teoria da computação, interfaces, desenvolvimento web/mobile
            e projetos integradores.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#disciplinas"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600"
            >
              Explorar disciplinas
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#estatisticas"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Ver linguagens e linha do tempo
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xs backdrop-blur-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </span>
                  <Icon className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="mt-3 font-mono text-3xl font-bold text-slate-950">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{item.helper}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
