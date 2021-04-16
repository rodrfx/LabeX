import React from 'react';
import Banner from '../../components/Banner';
import CardTripHomePage from '../../components/CardTrip';
import { Link } from 'react-router-dom';
import { useTripsList } from '../../hooks/useTripsList';
import Loading from '../../components/Loading';
import * as S from './styles';

function HomePage() {
    const trips = useTripsList()

    const dataTrips = trips.map((trip) => {
        return (
            <Link to={`inscricao/${trip.id}/${trip.name}`}>
            <CardTripHomePage
                key={trip.id}
                name={trip.name}
                date={trip.date}
                description={trip.description}
                durationInDays={trip.durationInDays}
            />
            </Link>
        )
    })

    return (
        <>
            <Banner />
            <S.SubTitle><strong>CONHEÇA NOSSOS PACOTES</strong></S.SubTitle>
            <S.Container>
                <S.Card>
                    {dataTrips.length > 0 ? dataTrips : <Loading />}
                </S.Card>
            </S.Container>
        </>
    )
}

export default HomePage;