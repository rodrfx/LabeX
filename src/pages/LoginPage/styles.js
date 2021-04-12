import styled from 'styled-components';

export const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
text-align: center;
h1{
    font-size: 2rem;
    padding-bottom: 20px;
}
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 35%;
    button{
        height: 32px;
        margin-top: 20px;
        &:hover{
                 background-color: #5e5e5d;
                 color: white;
            };
    };
`;
