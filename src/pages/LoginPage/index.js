import React from 'react';
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

function LoginPage({setButtonLogin}) {
  const { form, onChange, resetForm } = useForm({ email: "", password: "" })
  const history = useHistory()
  useUnprotectedPage()

  const handleInputChange = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, resetForm, history, setButtonLogin)
  }

  return (
    <>
      <S.Container>
        <S.Title>
          <h1>Login Adminstrador</h1>
        </S.Title>
        <S.FormContainer onSubmit={handleSubmission}>
          <input
            name="email"
            value={form.email}
            onChange={handleInputChange}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleInputChange}
            type="password"
            placeholder="Senha"
            required
          />
          <button>
            ENTRAR
        </button>
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default LoginPage;