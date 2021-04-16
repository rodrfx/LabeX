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
    --header: #1a2b63;
	--background: #F2F3F5;
	--white: #fff;
	--text: #666666;
    --color: ##0764F9;
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
    border-radius: 5px;
}
`;

export default GlobalStyle;