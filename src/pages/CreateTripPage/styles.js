import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    padding-bottom: 20px;
    color: var(--title);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 1000px) {
    width: 55%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  button {
    height: 32px;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 5px;
    :hover {
      background-color: var(--hoverButton);
      color: white;
    }
  }
`;
