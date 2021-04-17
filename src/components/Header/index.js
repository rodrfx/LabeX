import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/labexW.svg'
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function Header({buttonLogin, setButtonLogin}) {
const history = useHistory()

const token = window.localStorage.getItem('token')
const logout = () => {window.localStorage.removeItem('token')}

const ActionbuttonLogin = () => {
  if(token){
    logout();
    setButtonLogin('Login')
    history.push('/')
  } else {
    history.push('/login')
  }
}

  return (
      <S.Container>
        <S.Content>
          <Link to={'/'}>
          <img src={Logo} alt={"logomarca"} />
          </Link>
          <S.DisplatButton>
            {token && 
            <Link to={'/viagens'}>
            <S.Button>Área Restrita</S.Button>
            </Link>
            }
          <S.Button onClick={ActionbuttonLogin} primary>{buttonLogin}</S.Button>
          </S.DisplatButton>
        </S.Content>
      </S.Container>
  )
}

export default Header;