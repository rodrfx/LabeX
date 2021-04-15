import React from 'react';
import CandidateItem from './CandidateItem';
import { Card, Title } from './styles';

function CandidatesList(props) {
  return (
    <Card>
      <Title>Lista de Candidatos</Title>
        {props.candidates.map(candidate => {
          return <CandidateItem 
          key={candidate.id}
          candidates={candidate} 
          decideCandidate={props.decideCandidate}
          />
        })}

  </Card>
  )
}

export default CandidatesList;
