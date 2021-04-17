import React from 'react';
import { ItemContent } from './styles';

function TripInfoItem(props) {
  return (
    <ItemContent>
      <strong>{props.infoName}:</strong> {props.name}
  </ItemContent>
  )
}

export default TripInfoItem;