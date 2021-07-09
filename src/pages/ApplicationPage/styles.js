import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  h1 {
    color: var(--title);
    font-size: 2rem;
    padding-bottom: 20px;
  }
  p {
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  p:nth-child(3) {
    color: red;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  button {
    height: 32px;
    margin-top: 20px;
    font-weight: bold;
    :hover {
      background-color: var(--hoverButton);
      color: white;
    }
  }
`;
