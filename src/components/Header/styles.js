import styled from 'styled-components';

export const Container = styled.div`
  height: 2rem;
  min-height: 64px;
  background: var(--header);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  font-size: 1.2rem;
    img{
    height: 2.5rem;
    margin-left: 50px;
  } 
`;

export const DisplatButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const Button = styled.button`
    border: ${props => (props.primary ? '1px solid #fff' : 'none')};
    background-color: inherit;
    color: #fff;
    margin-left: 15px;
    padding: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    :hover{
      padding: 11px 10px;
    }
`;