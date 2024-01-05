import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "src/setup/styles/googleFont.css";

export const GlobalStyle = createGlobalStyle`

${normalize}

:root{
    //Color custom properties HEX
    --background-color-black: #161a1e;
    --background-color-orange: #e58e27;
    --secondary-text-color: #9a9a9a;
    --primary-text-color: #fbfbfb;
    

    //Color custom properties RGB
    --rgb-background-color-black: 22, 26, 30;
    --rgb-background-color-orange: 229, 142, 39;
    --rgb-secondary-text-color: 154, 154, 154;
    --rgb-primary-text-color: 251, 251, 251;

  

    //Sizes custom properties
    --app-padding-upper : 2rem;
    --app-padding-side: 5rem;
    
    
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    



}

html{
    width: 100vw;
    height: 100vh;
    font-family: Inter;
    
}

body{
    width: 100%;
    height: 100%;
    background-color: var(--background-color-black);
 

    &:before{
        content:"";
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png);
        opacity: 0.05;
        pointer-events: none;
    }
}

`;
