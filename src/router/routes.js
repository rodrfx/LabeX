import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateTripPage from '../pages/CreateTripPage';
import TripsListPage from '../pages/TripsListPage';
import TripDetailPage from '../pages/TripDetailPage';
import ApplicationPage from '../pages/ApplicationPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/inscricao">
                    <ApplicationPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route> 
                <Route path="/viagens/listar">
                    <TripsListPage />
                </Route>
                <Route path="/viagens/criar">
                    <CreateTripPage />
                </Route>
                <Route path="/viagens/detalhes/:id">
                    <TripDetailPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;