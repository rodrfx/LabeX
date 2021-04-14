import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => (props.primary ? '#333' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#333')};
  padding: 8px 20px;
  outline: none;
  border-radius: 50px;
  /* font-size: 16px; */
`;
