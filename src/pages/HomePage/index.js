import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import * as S from './styles';
import axios from 'axios';
import CardTripHomePage from '../../components/CardTripHomePage';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';

function HomePage() {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get(`${BASE_URL}/rodrigo-xavier-dumont/trips`)
            .then((response) => {
                // console.log(response.data.trips)
                setTrips(response.data.trips)
            })
    }, []);

    const goToTripDetailPage = (history, id) => {
        history.push(`/viagens/detalhes/${id}`)
    }

    const onClickCard = (id) => {
        goToTripDetailPage(history, id)
    }

    const DataTrips = trips.map((trip) => {
        return (
            <CardTripHomePage
                key={trip.id}
                name={trip.name}
                date={trip.date}
                description={trip.description}
                durationInDays={trip.durationInDays}
                onClick={() => onClickCard(trip.id) }
            />
        )
    })

    return (
        <>
            <Header />
            <Banner />
            <S.SubTitle><strong>CONHEÇA NOSSOS PACOTES</strong></S.SubTitle>
            <S.Container>
                <S.Card>
                    {DataTrips}
                </S.Card>
            </S.Container>
        </>
    )
}

export default HomePage;