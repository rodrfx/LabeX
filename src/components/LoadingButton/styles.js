import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div{
      margin-right: 5px;
      font-weight: bold;
      font-size:16px;

  }
`;

const rotate = keyframes`
from {
  transform: rotate(360deg);
}
`;

export const Loading = styled.div`
  height: 20px;
  width: 20px;
  border: 4px solid #4d4dff38;
  border-top-color: #000080;
  border-radius: 50%;
  animation: ${rotate} 700ms linear infinite;
`;
