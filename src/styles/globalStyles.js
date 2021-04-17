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
    --header: #262626;
	--background: #F2F3F5;
	--white: #fff;
	--text: #666666;
    --hoverButton: #4d4d4d;
    --title: #595959;
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