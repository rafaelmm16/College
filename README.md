# 🎓 College — Disciplinas da Faculdade

Monorepositório + site em **Next.js** e **Tailwind CSS** que reúne, em um único lugar, todos os códigos e projetos de 19 disciplinas cursadas durante a graduação em **Sistemas de Informação** por [Rafael Merlo (@rafaelmm16)](https://github.com/rafaelmm16).

🌐 **Site no GitHub Pages:** [https://rafaelmm16.github.io/College/](https://rafaelmm16.github.io/College/)

## ✨ O que este repositório contém

- **Site em Next.js + Tailwind CSS** (`src/`): vitrine interativa com busca em tempo real, filtros por área e linguagem, ordenação, alternância de visualização, distribuição de linguagens e linha do tempo acadêmica.
- **Código-fonte consolidado das 19 disciplinas** (`disciplinas/`): todos os antigos repositórios individuais organizados por eixo temático dentro deste único repositório.

## 📚 Disciplinas Organizadas (`disciplinas/`)

### 1. Fundamentos & Paradigmas (`disciplinas/fundamentos-e-paradigmas/`)
| Disciplina | Linguagem | Pasta |
| :--- | :--- | :--- |
| Programação Estruturada | C | [`Programacao-Estruturada`](./disciplinas/fundamentos-e-paradigmas/Programacao-Estruturada) |
| Programação Funcional | Python | [`Programacao-Funcional`](./disciplinas/fundamentos-e-paradigmas/Programacao-Funcional) |
| Programação Orientada a Objetos | Java | [`Programacao-Orientada-a-Objetos`](./disciplinas/fundamentos-e-paradigmas/Programacao-Orientada-a-Objetos) |
| Linguagens de Programação | C | [`Linguagens-de-Programacao`](./disciplinas/fundamentos-e-paradigmas/Linguagens-de-Programacao) |
| Algoritmos e Programação com Python | Python | [`Algoritmos-e-programacao-com-Python`](./disciplinas/fundamentos-e-paradigmas/Algoritmos-e-programacao-com-Python) |

### 2. Estruturas de Dados & Teoria (`disciplinas/estruturas-de-dados-e-teoria/`)
| Disciplina | Linguagem | Pasta |
| :--- | :--- | :--- |
| Lógica para Computação II | Prolog | [`Logica-para-Computacao-2`](./disciplinas/estruturas-de-dados-e-teoria/Logica-para-Computacao-2) |
| Estrutura de Dados I | C | [`Estrutura-de-Dados-1`](./disciplinas/estruturas-de-dados-e-teoria/Estrutura-de-Dados-1) |
| Estrutura de Dados II | C | [`Estrutura-de-Dados-2`](./disciplinas/estruturas-de-dados-e-teoria/Estrutura-de-Dados-2) |
| Arquitetura de Computadores | Assembly | [`Arquitetura-de-Computadores`](./disciplinas/estruturas-de-dados-e-teoria/Arquitetura-de-Computadores) |
| Linguagens Formais e Autômatos | Python | [`Linguagens-Formais-e-Automatos`](./disciplinas/estruturas-de-dados-e-teoria/Linguagens-Formais-e-Automatos) |
| Compiladores | C++ | [`Compiladores`](./disciplinas/estruturas-de-dados-e-teoria/Compiladores) |

### 3. Web, Mobile & IHC (`disciplinas/web-mobile-e-ihc/`)
| Disciplina | Linguagem | Pasta |
| :--- | :--- | :--- |
| Interação Homem-Computador | TypeScript | [`Interacao-Homem-Computador`](./disciplinas/web-mobile-e-ihc/Interacao-Homem-Computador) |
| Ferramentas de Desenvolvimento Web | HTML / CSS / JS / PHP | [`Ferramentas-de-Desenvolvimento-Web`](./disciplinas/web-mobile-e-ihc/Ferramentas-de-Desenvolvimento-Web) |
| Interface Humano-Computador | TypeScript | [`Interface-Humano-Computador`](./disciplinas/web-mobile-e-ihc/Interface-Humano-Computador) |
| Desenvolvimento para Dispositivos Móveis | TypeScript | [`DESENVOLVIMENTO-PARA-DISPOSITIVO-MOVEIS`](./disciplinas/web-mobile-e-ihc/DESENVOLVIMENTO-PARA-DISPOSITIVO-MOVEIS) |

### 4. Projetos Integradores & Sistemas (`disciplinas/projetos-integradores-e-sistemas/`)
| Disciplina | Linguagem | Pasta |
| :--- | :--- | :--- |
| Sistemas Multimídia (Projeto Final) | GDScript | [`Projeto-Final-SM`](./disciplinas/projetos-integradores-e-sistemas/Projeto-Final-SM) |
| Projeto de Sistemas | TypeScript | [`Projeto-de-Sistemas`](./disciplinas/projetos-integradores-e-sistemas/Projeto-de-Sistemas) |
| Projeto Integrador VI-B | C++ | [`PROJETO-INTEGRADOR-VI-B`](./disciplinas/projetos-integradores-e-sistemas/PROJETO-INTEGRADOR-VI-B) |
| Projeto Integrador VIII-B | TypeScript | [`Projeto-Integrador-VIII-B`](./disciplinas/projetos-integradores-e-sistemas/Projeto-Integrador-VIII-B) |

## 🛠️ Tecnologias do Site

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## 📁 Estrutura do Repositório

```text
college/
├── disciplinas/
│   ├── fundamentos-e-paradigmas/
│   ├── estruturas-de-dados-e-teoria/
│   ├── web-mobile-e-ihc/
│   └── projetos-integradores-e-sistemas/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── DisciplineCatalog.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageBreakdown.tsx
│   │   └── Navbar.tsx
│   └── data/
│       └── disciplines.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Como Executar o Site Localmente

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros scripts

```bash
# Gerar build estático de produção (pasta out/)
npm run build

# Verificar lint
npm run lint
```

## 🌐 Deploy no GitHub Pages

O repositório já possui o workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) configurado para publicar automaticamente o site estático a cada `push` na branch `main`.

Para ativar no GitHub (apenas na primeira vez):
1. Acesse **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça o push para a branch `main` (ou execute o workflow manualmente na aba **Actions**).
