import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import * as S from './styles';
import { applicationTrip } from '../../services/trip'

function ApplicationPage() {
  const params = useParams()
  const { form, onChange, resetForm } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

  const handleInputChange = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    // console.log(form)
    applicationTrip(form, params, resetForm)
  }
  
  return (
    <>
    <S.Container>
    <S.Title>
    <h1>Estamos quase lá!</h1>
    <p>Viagem: {params.name}</p>
    <p>Inscreva-se:</p>
    </S.Title>
      <S.FormContainer onSubmit={handleSubmission} >
        <input
          name={"name"}
          value={form.name}
          onChange={handleInputChange}
          type={"text"}
          placeholder={"Nome Completo"}
          required
        />
        <input
          name={"age"}
          value={form.age}
          onChange={handleInputChange}
          type={"number"}
          placeholder={"Idade"}
          min="18"
          required
        />
        <input
          name={"profession"}
          value={form.profession}
          onChange={handleInputChange}
          type={"text"}
          placeholder={"Profissão"}
          required
        />
         <input
          name={"applicationText"}
          value={form.applicationText}
          onChange={handleInputChange}
          type={"text"}
          placeholder={"Texto de aplicação"}
          required
        />
         <input
          name={"country"}
          value={form.country}
          onChange={handleInputChange}
          type={"text"}
          placeholder={"País"}
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

export default ApplicationPage;