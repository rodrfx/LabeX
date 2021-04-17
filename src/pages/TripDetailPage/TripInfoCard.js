import React from 'react';
import TripInfoItem from '../../pages/TripDetailPage/TripInfoItem'
import { Card, Title } from './styles';

function TripInfoCard(props) {
  const {name, planet, date, description, durationInDays} = props.info
  return (
    <Card>
      <Title>Detalhes da Viagem</Title>
      <TripInfoItem infoName={'Viagem'} name={name}/>
      <TripInfoItem infoName={'Planeta'} name={planet}/>
      <TripInfoItem infoName={'Data'} name={date}/>
      <TripInfoItem infoName={'Duração'} name={`${durationInDays} dias`}/>
      <TripInfoItem infoName={'Duração'} name={'Netuno'}/>
      <TripInfoItem infoName={'Descrição'} name={description}/>
    </Card>
  )
}

export default TripInfoCard;