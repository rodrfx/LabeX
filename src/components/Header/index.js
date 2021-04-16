import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/labex.svg'
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
          <p onClick={ActionbuttonLogin}>{buttonLogin}</p>
        </S.Content>
      </S.Container>
  )
}

export default Header;