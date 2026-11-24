import { Calendar, Code2 } from "lucide-react";
import { DISCIPLINES, getLanguageStats } from "@/data/disciplines";

export function LanguageBreakdown() {
  const languageStats = getLanguageStats();

  const timelineMap = new Map<number, typeof DISCIPLINES>();
  for (const discipline of DISCIPLINES) {
    const list = timelineMap.get(discipline.year) ?? [];
    list.push(discipline);
    timelineMap.set(discipline.year, list);
  }

  const timeline = Array.from(timelineMap.entries()).sort(
    ([yearA], [yearB]) => yearA - yearB
  );

  return (
    <section
      id="estatisticas"
      className="border-t border-slate-200/80 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Languages Distribution */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6">
            <div className="flex items-center gap-2 text-indigo-600">
              <Code2 className="h-5 w-5" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                Stack Acadêmica
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-950">
              Linguagens Utilizadas
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Distribuição das linguagens principais presentes nos 19
              repositórios da graduação.
            </p>

            {/* Stacked progress bar */}
            <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-slate-200">
              {languageStats.map((stat) => (
                <div
                  key={stat.language}
                  style={{
                    width: `${(stat.count / DISCIPLINES.length) * 100}%`,
                    backgroundColor: stat.color,
                  }}
                  title={`${stat.language}: ${stat.count} repositório(s)`}
                />
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {languageStats.map((stat) => (
                <li
                  key={stat.language}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: stat.color }}
                    />
                    <span className="font-medium text-slate-800">
                      {stat.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-500">
                    <span>
                      {stat.count}{" "}
                      {stat.count === 1 ? "repositório" : "repositórios"}
                    </span>
                    <span className="w-10 text-right font-semibold text-slate-700">
                      {stat.percentage}%
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Timeline */}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6">
            <div className="flex items-center gap-2 text-indigo-600">
              <Calendar className="h-5 w-5" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                Evolução
              </span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-950">
              Linha do Tempo dos Repositórios
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Ano de criação dos repositórios ao longo da jornada universitária.
            </p>

            <div className="mt-6 space-y-4">
              {timeline.map(([year, items]) => (
                <div
                  key={year}
                  className="flex gap-4 border-l-2 border-indigo-200 pl-4"
                >
                  <span className="font-mono text-sm font-bold text-indigo-700">
                    {year}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <a
                        key={item.id}
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
