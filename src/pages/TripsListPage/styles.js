import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 80vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1{
    padding: 20px;
  };
`;
export const Itens = styled.div`
  margin: 0 auto;
  
`;

export const Button = styled.button`
  background-color: inherit;
  padding: 10px 15px;
  margin: 30px 0;
  font-size: 18px;
  border-radius: 5px;
  :hover{
    color: #fff;
    background-color:var(--hoverButton)
  }
`;