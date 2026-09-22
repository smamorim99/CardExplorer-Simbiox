# 🃏 Explore o universo de Magic: The Gathering

Aplicação web desenvolvida em **React + TypeScript** para pesquisa e exploração de cartas de **Magic: The Gathering**, utilizando a **Scryfall API**.

O projeto permite pesquisar cartas pelo nome, visualizar suas informações, texto das habilidades, características da carta e rulings, além de apresentar uma interface inspirada no universo de Magic: The Gathering.

## Funcionalidades

* 🔎 Pesquisa de cartas pelo nome
* 🃏 Visualização da imagem da carta
* 📋 Exibição das informações da carta
* 📖 Visualização do texto de regras da carta
* 🗂️ Informações sobre edição e número de coleção
  
## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando:

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Axios**
* **React Icons**
* **Scryfall API**

## 🔗 API

Os dados das cartas são obtidos através da **Scryfall API**, uma API pública que disponibiliza informações sobre cartas de Magic: The Gathering.

📚 [Documentação da Scryfall API](https://scryfall.com/docs/api)

## 📁 Estrutura do projeto

```text
src/
├── components/
│   ├── CardFrame/
|   |── CardInfoTable/
│   └── ...
│
├── Pages/
│   ├── CardDetails/
│   ├── CardSearch/
│   └── ...
│
├── routes/
│   └── ...
│
└── services/...
```

A aplicação utiliza componentes independentes para facilitar a organização e manutenção do código.

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse a pasta

```bash
cd CardExplorer-Simbiox
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Após iniciar o servidor, o Vite disponibilizará a aplicação localmente.

## 🔍 Exemplo de pesquisa

O usuário pode pesquisar uma carta pelo nome através da página de busca.

A aplicação realiza uma requisição para a Scryfall API e utiliza os dados retornados para montar a visualização da carta.

### Exemplo

```text
Mago Negro
```

A partir do resultado, são apresentadas informações como:

* Nome
* Custo de mana
* Tipo
* Texto da carta
* Cores
* Identidade de cor
* Edição
* Número de coleção
* Imagem
* Rulings

## 🧩 Arquitetura

A aplicação foi estruturada utilizando componentes reutilizáveis e separação de responsabilidades.

### Components

Responsáveis pela construção da interface e apresentação dos dados.

### Services

Responsáveis pela comunicação com a API externa.

### Routes

Responsáveis pela navegação entre as diferentes páginas da aplicação.


## 👩‍💻 Desenvolvido por

**Sofia Mendes**


