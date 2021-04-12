import styled from 'styled-components';

export const Container = styled.div`
    height: 70vh;
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
p{
    margin: 10px 0;
    font-size: 1.5rem;
    font-weight:bold;
};
p:nth-child(3) {
    color: red;
}
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
    button{
        height: 32px;
        margin-top: 20px;
        &:hover{
                 background-color: #5e5e5d;
                 color: white;
            };
    };
`;