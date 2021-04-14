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
  };
  p{
    color: black;
    margin-right: 50px;
  }

`;