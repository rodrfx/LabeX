import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { createTrip } from '../../services/trip';
import useProtectedPage from '../../hooks/useProtectPage';
import * as S from './styles';

function CreateTripPage() {
  const { form, onChange, resetForm } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
  useProtectedPage()
  const history = useHistory()

  const handleInputChange = (event) => {
    const { value, name } = event.target
    onChange(value, name)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const data = new Date(form.date);
    const formattedDate = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays
    } 

    createTrip(body, resetForm, history)

  }

  return (
    <>
      <S.Container>
        <S.Title>
          <h1>Adicionar viagem</h1>
        </S.Title>
        <S.FormContainer onSubmit={handleSubmission}>
          <input
            name="name"
            value={form.name}
            onChange={handleInputChange}
            type="text"
            placeholder="Nome da viagem"
            required
          />
          <input
            name="planet"
            value={form.planet}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe o planeta"
            required
          />
          <input
            name="date"
            value={form.date}
            onChange={handleInputChange}
            type="date"
            placeholder="Data da viagem"
            required
          />
          <input
            name="description"
            value={form.description}
            onChange={handleInputChange}
            type="text"
            placeholder="Descrição da viagem"
            required
          />
          <input
            name="durationInDays"
            value={form.durationInDays}
            onChange={handleInputChange}
            type="number"
            placeholder="Duração em dias"
            required
          />
          <button>
            CADASTRAR
          </button>
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default CreateTripPage;