import React from 'react';
import { Link } from 'react-router-dom';
import ListTrips from '../../components/ListTripItem';
import { useTripsList } from '../../hooks/useTripsList';
import useProtectedPage from '../../hooks/useProtectedPage';
import Loading from '../../components/Loading'
import * as S from './styles';

function TripsListPage() {
  const trips = useTripsList()
  useProtectedPage()

  const tripData = trips.map((trip) => {
    return (
      <Link to={`/viagens/detalhes/${trip.id}`}>
          <ListTrips
            key={trip.id}
            name={trip.name}
          />
      </Link>
    )
  })

  return (
    <S.Container>
      <S.Content>
        <S.Itens>
        <Link to={'/viagens/criar'}>
          <S.Button>Cadastrar nova viagem</S.Button>
        </Link>
        <h1>Lista de viagens</h1>
        {tripData.length > 1 ? tripData : <Loading />}
        </S.Itens>
      </S.Content>
    </S.Container>
  )
}

export default TripsListPage;