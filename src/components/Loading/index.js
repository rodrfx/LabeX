import React from 'react';
import * as S from './styles';
import Rocket from '../../assets/rocket.svg'

function Loading() {
  return (
  <S.Container>
      <S.GoBack src={Rocket} alt={'imagem de um foguete'}/>
  </S.Container>
  )
}

export default Loading;