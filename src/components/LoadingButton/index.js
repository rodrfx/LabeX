import React from 'react';
import { Container, Loading } from './styles';

function LoadingButton() {
    return (
        <Container>
            <div>Carregando...</div>
            <Loading></Loading>
        </Container>
    )
}

export default LoadingButton;