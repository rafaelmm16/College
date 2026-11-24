[← Voltar ao repositório principal](../../../README.md) • [🌐 Site do Portfólio](https://rafaelmm16.github.io/College/)

# Estrutura de Dados II

> **Área:** Estruturas de Dados & Teoria · **Linguagem:** C · **Ano:** 2023

## 📖 Sobre o Projeto

Trabalho prático desenvolvido para a disciplina de **Estrutura de Dados II** em **linguagem C**, cujo objetivo é implementar uma **Árvore Rubro-Negra (Red-Black Tree)** sem ponteiro para o nó pai.

### 📋 Funcionalidades do Sistema de Estoque

O sistema simula o controle de estoque de uma empresa de importação, permitindo:

1. Cadastrar um novo produto;
2. Excluir um produto cadastrado;
3. Atualizar a quantidade de um produto no estoque;
4. Listar todos os produtos cadastrados;
5. Listar todos os produtos em estoque;
6. Imprimir a árvore Rubro-Negra;
7. Encerrar o programa.

## 📂 Conteúdo da Pasta

- `main.c` — interface de menu e fluxo principal do programa.
- `RBT.h` / `RBT.c` — definição e implementação da Árvore Rubro-Negra.

## 🚀 Como Executar

Requer um compilador C (`gcc`):

```bash
gcc main.c RBT.c -o estoque
./estoque
```
