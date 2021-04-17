import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateTripPage from '../pages/CreateTripPage';
import TripsListPage from '../pages/TripsListPage';
import TripDetailPage from '../pages/TripDetailPage';
import ApplicationPage from '../pages/ApplicationPage';

function Router({setButtonLogin}) {
    return (
            <Switch>
                <Route path="/inscricao/:id/:name">
                    <ApplicationPage />
                </Route>
                <Route path="/login">
                    <LoginPage setButtonLogin={setButtonLogin}/>
                </Route> 
                <Route path="/viagens/criar">
                    <CreateTripPage />
                </Route>
                <Route path="/viagens/detalhes/:id">
                    <TripDetailPage />
                </Route>
                <Route path="/viagens">
                    <TripsListPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
    );
}

export default Router;