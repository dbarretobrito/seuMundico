import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none; /* remove contorno azul ao navegar com TAB */
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0b0b0b; /* fundo preto mais consistente */
    color: #fff;
  }

  a {
    color: inherit;           /* links brancos, herdando a cor do texto */
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Barra de rolagem personalizada */
  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }

  body {
    scrollbar-color: #444 #111; /* (thumb, track) para Firefox */
  }
`;
