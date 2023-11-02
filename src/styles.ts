import { createGlobalStyle } from "styled-components";

export const cores = {
  amarelo: "#FFEBD9",
  amareloClaro: "#FFF8F2",
  amareloEscuro: "#E66767",
  branca: "#fff",
};

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}

body{
    background-color: ${cores.amareloClaro};
    
}



`;
