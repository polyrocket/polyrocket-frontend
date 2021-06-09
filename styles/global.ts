import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: white;
    margin: 0 auto;
  }
  #__next {
    overflow: hidden;
  }
  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
    margin: 0;
  }
  .selection_bubble_root,
  .selection_img_search {
    display: none;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
  }

  *,
  *:after,
  *:before,
  input[type="search"] {
    box-sizing: border-box;
    outline: none;
  }
  *::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }

  *::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d5e1ed;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul,
  li,
  ol,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
  }

  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }

  [role="button"],
  button,
  input,
  select,
  textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }
  [role="button"],
  button,
  input,
  textarea {
    appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  select::-ms-expand {
    display: none;
  }
  p {
    line-height: 1.4285;
  }

  textarea {
    line-height: 1.4285;
  }

  body,
  select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }
`;
export default GlobalStyle;
