import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark: #0C0C0C;
        --gray-light: #C0C0C0;
        --gray: #C0C0C0;
        --light: #FFFFFF;
        --green: #307351;
        --red: #bf211e;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size:93.75%; 
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--dark);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`