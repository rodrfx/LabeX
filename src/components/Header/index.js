import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/labex.svg'

function Header() {
  return (
      <S.Container>
        <S.Content>
          <Link to={'/'}>
          <img src={Logo} alt={"logomarca"} />
          </Link>
          <Link to={'/login'}>
          <p>Login</p>
          </Link>
        </S.Content>
      </S.Container>
  )
}

export default Header;