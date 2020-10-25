import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before,*::after {
        box-sizing: border-box;
    }

    html, body, #root {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    html {
        font-family: Karla, sans-serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: Rubik, sans-serif;
    }

    #root {
        padding: 1rem;
    }

`

export default GlobalStyle
