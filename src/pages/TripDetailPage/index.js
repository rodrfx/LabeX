import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import TripInfoCard from './TripInfoCard';
import CandidatesList from './CandidatesList';
import * as S from './styles';

function TripDetailPage() {
  const [trip, setTrip] = useState()
  const params = useParams();
  // console.log(params.id)

  const getTripDetail = () => {
    axios.get(`${BASE_URL}/rodrigo-xavier-dumont/trip/${params.id}`, {
      headers: { auth: window.localStorage.getItem('token') }
    })
      .then((res) => {
        setTrip(res.data.trip)
      })
  }

  useEffect(() => {
    getTripDetail()
  }, []);

  return (
    <>
      {trip && <>
        <TripInfoCard info={trip} />
        <CandidatesList candidates={trip.candidates} />
        </>
      }
    </>
  )
}

export default TripDetailPage;