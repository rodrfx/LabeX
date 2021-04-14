import React from 'react';
import Detail from '../../assets/iconDetail.svg'
import * as S from './styles';

function ListTrips(props) {
  return (
      <S.Content onClick= {props.onClick}>
      <img src={Detail} alt={'ícone de detalhe'}/>
      <p>{props.name}</p>
      </S.Content>
  )
}

export default ListTrips;