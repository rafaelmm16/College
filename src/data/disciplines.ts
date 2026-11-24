export type CategoryId =
  | "fundamentos"
  | "teoria-dados"
  | "web-mobile-ihc"
  | "projetos-sistemas";

export interface CategoryInfo {
  id: CategoryId;
  folderSlug: string;
  label: string;
  shortLabel: string;
  description: string;
  accentClass: string;
  badgeClass: string;
}

export interface Discipline {
  id: string;
  repoName: string;
  folderPath: string;
  title: string;
  category: CategoryId;
  language: string;
  description: string;
  repoUrl: string;
  topics: string[];
  year: number;
  updatedYear: number;
  stars: number;
}

export const AUTHOR = {
  name: "Rafael Merlo",
  username: "rafaelmm16",
  role: "Estudante de Sistemas de Informação",
  location: "São Mateus, ES - Brasil",
  githubUrl: "https://github.com/rafaelmm16",
  avatarUrl: "https://avatars.githubusercontent.com/u/39861526?v=4",
  repoUrl: "https://github.com/rafaelmm16/College",
};

const MONOREPO_TREE_BASE = `${AUTHOR.repoUrl}/tree/main`;

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "fundamentos",
    folderSlug: "fundamentos-e-paradigmas",
    label: "Fundamentos & Paradigmas",
    shortLabel: "Fundamentos",
    description:
      "Bases da programação imperativa, estruturada, orientada a objetos, funcional e estudo de linguagens.",
    accentClass: "from-blue-500 to-indigo-600",
    badgeClass: "bg-blue-50 text-blue-700 ring-blue-600/20",
  },
  {
    id: "teoria-dados",
    folderSlug: "estruturas-de-dados-e-teoria",
    label: "Estruturas de Dados & Teoria",
    shortLabel: "Dados & Teoria",
    description:
      "Algoritmos, estruturas de dados, lógica matemática, autômatos, compiladores e arquitetura de computadores.",
    accentClass: "from-violet-500 to-purple-600",
    badgeClass: "bg-violet-50 text-violet-700 ring-violet-600/20",
  },
  {
    id: "web-mobile-ihc",
    folderSlug: "web-mobile-e-ihc",
    label: "Web, Mobile & IHC",
    shortLabel: "Web, Mobile & IHC",
    description:
      "Desenvolvimento web e mobile, design de interfaces, usabilidade e interação humano-computador.",
    accentClass: "from-emerald-500 to-teal-600",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  },
  {
    id: "projetos-sistemas",
    folderSlug: "projetos-integradores-e-sistemas",
    label: "Projetos Integradores & Sistemas",
    shortLabel: "Projetos & Sistemas",
    description:
      "Projetos práticos multidisciplinares, prototipação de sistemas e sistemas multimídia.",
    accentClass: "from-amber-500 to-orange-600",
    badgeClass: "bg-amber-50 text-amber-700 ring-amber-600/20",
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  C: "#555555",
  "C++": "#f34b7d",
  Python: "#3572A5",
  Java: "#b07219",
  Assembly: "#6E4C13",
  Prolog: "#74283c",
  HTML: "#e34c26",
  GDScript: "#355570",
};

function makeDiscipline(
  data: Omit<Discipline, "folderPath" | "repoUrl">
): Discipline {
  const category = CATEGORIES.find((cat) => cat.id === data.category) ?? CATEGORIES[0];
  const folderPath = `disciplinas/${category.folderSlug}/${data.repoName}`;
  return {
    ...data,
    folderPath,
    repoUrl: `${MONOREPO_TREE_BASE}/${folderPath}`,
  };
}

export const DISCIPLINES: Discipline[] = [
  // Fundamentos & Paradigmas
  makeDiscipline({
    id: "programacao-estruturada",
    repoName: "Programacao-Estruturada",
    title: "Programação Estruturada",
    category: "fundamentos",
    language: "C",
    description:
      "Conteúdos e exercícios fundamentais de lógica e programação estruturada em linguagem C.",
    topics: ["c", "algoritmos", "ponteiros", "estruturado"],
    year: 2020,
    updatedYear: 2023,
    stars: 0,
  }),
  makeDiscipline({
    id: "programacao-funcional",
    repoName: "Programacao-Funcional",
    title: "Programação Funcional",
    category: "fundamentos",
    language: "Python",
    description:
      "Estudos e implementações práticas dos conceitos do paradigma funcional utilizando Python.",
    topics: ["python", "paradigma-funcional", "funcoes-puras"],
    year: 2020,
    updatedYear: 2023,
    stars: 0,
  }),
  makeDiscipline({
    id: "programacao-orientada-a-objetos",
    repoName: "Programacao-Orientada-a-Objetos",
    title: "Programação Orientada a Objetos",
    category: "fundamentos",
    language: "Java",
    description:
      "Disciplina de POO abordando classes, herança, polimorfismo, encapsulamento e abstração em Java.",
    topics: ["java", "poo", "orientacao-a-objetos"],
    year: 2021,
    updatedYear: 2026,
    stars: 1,
  }),
  makeDiscipline({
    id: "linguagens-de-programacao",
    repoName: "Linguagens-de-Programacao",
    title: "Linguagens de Programação",
    category: "fundamentos",
    language: "C",
    description:
      "Análise comparativa de paradigmas, semântica, tipagem e implementação de conceitos de linguagens de programação.",
    topics: ["c", "paradigmas", "semantica"],
    year: 2023,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "algoritmos-e-programacao-com-python",
    repoName: "Algoritmos-e-programacao-com-Python",
    title: "Algoritmos e Programação com Python",
    category: "fundamentos",
    language: "Python",
    description:
      "Listas de exercícios, projetos e resoluções da disciplina de Algoritmos e Programação com Python.",
    topics: ["python", "algoritmos", "logica"],
    year: 2024,
    updatedYear: 2024,
    stars: 0,
  }),

  // Estruturas de Dados & Teoria
  makeDiscipline({
    id: "logica-para-computacao-2",
    repoName: "Logica-para-Computacao-2",
    title: "Lógica para Computação II",
    category: "teoria-dados",
    language: "Prolog",
    description:
      "Estudo da linguagem de Programação em Lógica Matemática com implementações em Prolog.",
    topics: ["prolog", "logica-matematica", "programacao-logica"],
    year: 2020,
    updatedYear: 2023,
    stars: 1,
  }),
  makeDiscipline({
    id: "estrutura-de-dados-1",
    repoName: "Estrutura-de-Dados-1",
    title: "Estrutura de Dados I",
    category: "teoria-dados",
    language: "C",
    description:
      "Implementação de listas, pilhas, filas, alocação dinâmica de memória e algoritmos clássicos em C.",
    topics: ["c", "listas", "pilhas", "filas"],
    year: 2021,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "estrutura-de-dados-2",
    repoName: "Estrutura-de-Dados-2",
    title: "Estrutura de Dados II",
    category: "teoria-dados",
    language: "C",
    description:
      "Estruturas avançadas como árvores, grafos, tabelas hash e métodos eficientes de busca e ordenação em C.",
    topics: ["c", "arvores", "grafos", "ordenacao"],
    year: 2023,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "arquitetura-de-computadores",
    repoName: "Arquitetura-de-Computadores",
    title: "Arquitetura de Computadores",
    category: "teoria-dados",
    language: "Assembly",
    description:
      "Organização de computadores, registradores, conjunto de instruções e programação em baixo nível com Assembly.",
    topics: ["assembly", "baixo-nivel", "hardware"],
    year: 2023,
    updatedYear: 2026,
    stars: 0,
  }),
  makeDiscipline({
    id: "linguagens-formais-e-automatos",
    repoName: "Linguagens-Formais-e-Automatos",
    title: "Linguagens Formais e Autômatos",
    category: "teoria-dados",
    language: "Python",
    description:
      "Modelagem e implementação de autômatos finitos, gramáticas formais, expressões regulares e máquinas teóricas.",
    topics: ["python", "automatos", "gramaticas-formais"],
    year: 2023,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "compiladores",
    repoName: "Compiladores",
    title: "Compiladores",
    category: "teoria-dados",
    language: "C++",
    description:
      "Construção das etapas de compilação, incluindo análise léxica, sintática e semântica desenvolvidas em C++.",
    topics: ["c++", "analise-lexica", "analise-sintatica"],
    year: 2023,
    updatedYear: 2026,
    stars: 0,
  }),

  // Web, Mobile & IHC
  makeDiscipline({
    id: "interacao-homem-computador",
    repoName: "Interacao-Homem-Computador",
    title: "Interação Homem-Computador",
    category: "web-mobile-ihc",
    language: "TypeScript",
    description:
      "Projeto final da disciplina de Interação Homem-Computador com foco em experiência do usuário e usabilidade.",
    topics: ["typescript", "javascript", "ux", "usabilidade"],
    year: 2023,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "ferramentas-de-desenvolvimento-web",
    repoName: "Ferramentas-de-Desenvolvimento-Web",
    title: "Ferramentas de Desenvolvimento Web",
    category: "web-mobile-ihc",
    language: "HTML",
    description:
      "Projeto prático de desenvolvimento web integrando HTML, CSS, JavaScript e PHP.",
    topics: ["html", "css", "javascript", "php"],
    year: 2023,
    updatedYear: 2023,
    stars: 0,
  }),
  makeDiscipline({
    id: "interface-humano-computador",
    repoName: "Interface-Humano-Computador",
    title: "Interface Humano-Computador",
    category: "web-mobile-ihc",
    language: "TypeScript",
    description:
      "Aplicação interativa desenvolvida para a disciplina de Interface Humano-Computador com foco em usabilidade e interface.",
    topics: ["typescript", "ui", "acessibilidade", "frontend"],
    year: 2025,
    updatedYear: 2026,
    stars: 1,
  }),
  makeDiscipline({
    id: "desenvolvimento-para-dispositivo-moveis",
    repoName: "DESENVOLVIMENTO-PARA-DISPOSITIVO-MOVEIS",
    title: "Desenvolvimento para Dispositivos Móveis",
    category: "web-mobile-ihc",
    language: "TypeScript",
    description:
      "Aplicação mobile desenvolvida durante a disciplina de Desenvolvimento para Dispositivos Móveis em TypeScript.",
    topics: ["typescript", "mobile", "apps"],
    year: 2026,
    updatedYear: 2026,
    stars: 1,
  }),

  // Projetos Integradores & Sistemas
  makeDiscipline({
    id: "projeto-final-sm",
    repoName: "Projeto-Final-SM",
    title: "Sistemas Multimídia (Projeto Final)",
    category: "projetos-sistemas",
    language: "GDScript",
    description:
      "Projeto final da disciplina de Sistemas Multimídia desenvolvido com Godot Engine e GDScript.",
    topics: ["gdscript", "godot", "multimidia", "jogos"],
    year: 2022,
    updatedYear: 2025,
    stars: 0,
  }),
  makeDiscipline({
    id: "projeto-de-sistemas",
    repoName: "Projeto-de-Sistemas",
    title: "Projeto de Sistemas",
    category: "projetos-sistemas",
    language: "TypeScript",
    description:
      "Protótipo funcional desenvolvido para a disciplina de Projeto de Sistemas com React Native e TypeScript.",
    topics: ["react-native", "typescript", "prototipo"],
    year: 2023,
    updatedYear: 2023,
    stars: 0,
  }),
  makeDiscipline({
    id: "projeto-integrador-vi-b",
    repoName: "PROJETO-INTEGRADOR-VI-B",
    title: "Projeto Integrador VI-B",
    category: "projetos-sistemas",
    language: "C++",
    description:
      "Trabalho prático desenvolvido para a disciplina Projeto Integrador VI-B utilizando C++.",
    topics: ["c++", "projeto-integrador", "sistemas"],
    year: 2024,
    updatedYear: 2024,
    stars: 0,
  }),
  makeDiscipline({
    id: "projeto-integrador-viii-b",
    repoName: "Projeto-Integrador-VIII-B",
    title: "Projeto Integrador VIII-B",
    category: "projetos-sistemas",
    language: "TypeScript",
    description:
      "Aplicação web desenvolvida na disciplina Projeto Integrador VIII-B em TypeScript.",
    topics: ["typescript", "projeto-integrador", "web"],
    year: 2025,
    updatedYear: 2026,
    stars: 1,
  }),
];

export function getCategoryInfo(categoryId: CategoryId): CategoryInfo {
  return (
    CATEGORIES.find((cat) => cat.id === categoryId) ?? CATEGORIES[0]
  );
}

export function getLanguageStats() {
  const counts = new Map<string, number>();
  for (const discipline of DISCIPLINES) {
    counts.set(discipline.language, (counts.get(discipline.language) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / DISCIPLINES.length) * 100),
      color: LANGUAGE_COLORS[language] ?? "#64748b",
    }))
    .sort((a, b) => b.count - a.count || a.language.localeCompare(b.language));
}
