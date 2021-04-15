import React from 'react';
import { Link } from 'react-router-dom';
import ListTrips from '../../components/ListTripItem';
import { useTripsList } from '../../hooks/useTripsList';
import useProtectedPage from '../../hooks/useProtectPage';
import * as S from './styles';

function TripsListPage() {
  const trips = useTripsList()
  // useProtectedPage()
  // console.log(trips)

  return (
    <S.Container>
      <S.Content>
      <Link to={'/viagens/criar'}>
        <button>Cadastrar Viagem</button>
      </Link>
        <h1>Lista de viagens</h1>
      <div>
        {trips &&
          trips.map((trip) => {
            return (
              <Link to={`/viagens/detalhes/${trip.id}`}>
              <ListTrips
                key={trip.id}
                name={trip.name}
              />
              </Link>
            )
          })
        }
        </div>
        </S.Content>
    </S.Container>
  )
}

export default TripsListPage;