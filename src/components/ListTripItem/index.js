import React from 'react';
import Detail from '../../assets/iconDetail.svg'
import * as S from './styles';

function ListTripItem(props) {
  return (
      <S.Content>
      <img src={Detail} alt={'ícone de detalhe'}/>
      <p>{props.name}</p>
      </S.Content>
  )
}

export default ListTripItem;