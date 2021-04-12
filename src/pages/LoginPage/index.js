import React from 'react';
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function LoginPage() {
  const { form, onChange, resetForm } = useForm({ email: "", password: "" })
  const history = useHistory()

  const handleInputChange = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    console.log(form)
    login(form, resetForm, history)
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