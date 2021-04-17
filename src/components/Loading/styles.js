import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const goBack = keyframes`
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0);
    }
  `;

export const GoBack = styled.img`
  animation: ${goBack} 1s infinite alternate;
  width: 150px;
`;


