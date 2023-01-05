# BMovies - Filmes mais bem avaliados

Site feito em React JS e consumindo a TMDB API, que lista os filmes mais bem avaliados. Possui funções como layout responsivo, carregamento dos filmes com scroll infinito, função de busca e informações sobre cada filme

<img src="./assets/BMoviesGIF.gif" width="800px" alt="Gif demonstração do projeto" />

## 💻 Tecnologias utilizadas
As seguintes ferramentas foram utilizadas na construção do projeto:
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ReactJS](https://reactjs.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://reactrouter.com/en/main)
- [TMDB API](https://www.themoviedb.org/documentation/api?language=pt-BR)
- [Create React App](https://github.com/facebook/create-react-app)

## 🚀 Funções/Recursos
Principais funções e recursos da aplicação:
- **Scroll Infinito:** uso da [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), nativa do próprio Javascript, para carregar mais filmes quando a rolagem da página chega ao fim.
- **Roteamento:** roteamento das páginas utilizando o [React Router Dom](https://reactrouter.com/en/main)
- **Pesquisa:** busca os filmes pelo título baseado em `query string`, utilizando o [React Router Dom](https://reactrouter.com/en/main)
- **Responsividade:** layout responsivo que se ajusta aos diferentes tamanhos de tela.

## 🛠 Pré-requisitos
* Para começar, você precisa ter uma chave de acesso da [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
* Ter instalado o [Git](https://git-scm.com/) e o [NodeJs](https://nodejs.org/en/).

## ⚙ Como rodar a aplicação
Com o auxílio de um terminal, precisamos rodar alguns comandos para executar o projeto:
* Primeiro, clone este repositório:
```bash
$ git clone https://github.com/luizfelipeapolonio/bmovies
```
* Acesse a pasta da aplicação:
```bash
$ cd bmovies
```
* Instale as dependências:
```bash
 $ npm install
```
* Agora, com o auxílio de um editor de códigos, criamos um arquivo `.env` na raíz da aplicação:
<img src="./assets/env_file.png" alt="Criação do arquivo .env" />

* Dentro do arquivo `.env`, coloque sua chave de acesso da TMDB API, e os endpoints da API, seguindo este modelo:
```
REACT_APP_API_KEY=api_key="Sua chave de acesso, sem aspas"
REACT_APP_BASE_URL=https://api.themoviedb.org/3/movie
REACT_APP_POSTER_IMG=https://image.tmdb.org/t/p/w500
REACT_APP_SEARCH_URL=https://api.themoviedb.org/3/search/movie?
```

* Com o auxílio do terminal novamente, na pasta raíz da aplicação (bmovies), damos o comando para iniciar a aplicação:
```bash
$ npm start
```
* A aplicação irá abrir automaticamente no seu navegador na porta:3000, caso não abra, acesse http://localhost:3000

## 📝 Licença
Este repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido neste repositório.

## Autor
Feito com 💜 por luizfelipeapolonio
