import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const useTripsList = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/rodrigo-xavier-dumont/trips`)
            .then((response) => {
                // console.log(response.data.trips)
                setTrips(response.data.trips)
            })
    }, []);

    return trips
}