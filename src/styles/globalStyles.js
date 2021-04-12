import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: var(--background);
    color: var(--text);
}

:root{
	--white: #fff;
	--background: #F2F3F5;
	--text: #666666;
}

body, input, textarea, button {
   font-family: 'Roboto', sans-serif;
}

button{
    cursor: pointer
}

a{
    color: inherit;
    text-decoration: none;
}

input{
    height: 32px;
    margin: 15px 2px 0 2px;
    padding: 12px 14px;
    font-size: 17px;
    border: red;
}
`;

export default GlobalStyle;