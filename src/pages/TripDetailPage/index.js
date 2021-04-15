import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { user } from '../../constants/user';
import TripInfoCard from './TripInfoCard';
import CandidatesList from './CandidatesList';
import useProtectedPage from '../../hooks/useProtectedPage';

function TripDetailPage() {
  const [trip, setTrip] = useState()
  const params = useParams();
  useProtectedPage()

  const getTripDetail = () => {
    axios.get(`${BASE_URL}/${user}/trip/${params.id}`, {
      headers: { auth: window.localStorage.getItem('token') }
    })
      .then((res) => {
        setTrip(res.data.trip)
      })
  }

  useEffect(() => {
    getTripDetail()
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }
    axios.put(`${BASE_URL}/${user}/trips/${params.id}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    })
      .then(() => {
        getTripDetail()
      })
  }

  return (
    <>
      {trip && <>
        <TripInfoCard info={trip} />
        <CandidatesList
          candidates={trip.candidates}
          decideCandidate={decideCandidate}
        />
      </>
      }
    </>
  )
}

export default TripDetailPage;