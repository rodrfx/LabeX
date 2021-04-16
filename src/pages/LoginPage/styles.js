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
    width: 30%;
    button{
        background-color: inherit;
        padding: 5px 10px;
        margin: 30px 0;
        font-size: 16px;
        border-radius: 5px;
        &:hover{
                 background-color: #5e5e5d;
                 color: white;
            };
    };
`;
