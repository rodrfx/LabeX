import React from 'react';
import * as S from './styles';

function CardTripHomePage(props) {
    return (
        <S.Container>
            <S.Info>
                <h3><b>{props.name}</b></h3>
                <p><b>Data:</b> {props.date}</p>
                <p><b>Duração:</b> {props.durationInDays} dias</p>
                <p><b>Descrição:</b> {props.description}</p>
            </S.Info>
        </S.Container>
    )
}

export default CardTripHomePage;