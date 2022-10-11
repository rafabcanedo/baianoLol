import { createGlobalStyle } from "styled-components";
// Import Fonts
import "@fontsource/alkalami";
import "@fontsource/lato";
import "@fontsource/open-sans";
import "@fontsource/oswald";

const GlobalStyles = createGlobalStyle`
 :root {
 --background:#ecf0f3; //#141927;
 
 --white: #FFFFFF;
 --black: #000000;
 
 --amarelo: #daa520;
 
 --azul-dark: #141927;
 --azul-light: #69b5ff;
 --azul-focus: #040109;
 
 --roxo-clean: #7c7ce1;
 --roxo-200: #9147ff;
 --roxo-300: #8a2be2;
 --roxo-400: #a970ff;
 --roxo-500: #772ce8;

 --gray-100: #adadb8;
 }
 
 *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 body {
    font-family: 'lato', sans-serif;
    overflow-x: hidden;
    background-color: var(--background);
 }
 h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
 }
 a {
    color: inherit;
    text-decoration: none;
 }
`;

export default GlobalStyles;