import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 318px;
    min-height: 270px;
    padding-bottom: 10px;
    height: auto;
    background: #f2f2f2;
    cursor: pointer;
    :hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    };
`;

export const Info = styled.div`
     margin: 20px;
     p{
        font-size:18px;
        margin: 10px;
     }
     h3{
         color: var(--title);
         font-size: 20px;
         padding: 20px;
     }
`;
