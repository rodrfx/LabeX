import styled from 'styled-components';

export const Container = styled.div`
  height: 2rem;
  min-height: 64px;
  background: #0264F9;
  border: 1px solid black;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    font-size: 1.8rem;
  img{
    height: 2.5rem;
  };
  p{
    color: black;
  }

`;