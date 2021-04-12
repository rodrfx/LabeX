import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function TripsListPage() {
  return (
    <div>
      <h1>Lista de Viagens</h1>
      <Link to={'/viagens/criar'}>
        <button>Aplicar para viagem</button>
      </Link>

    </div>
  )
}

export default TripsListPage;