import React from 'react';
import CandidatesItem from './CandidateItem';
import { Card, Title } from './styles';

function CandidatesList(props) {

  return (
  <Card>
      <Title>Lista de Candidatos</Title>
        {props.candidates.map(candidate => {
            return <CandidatesItem candidates={candidate.name}/>
        })}
  </Card>
  )
}

export default CandidatesList;
