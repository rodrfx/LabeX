import React from 'react';
import Router from './router/routes';
import {  BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Router />
    </BrowserRouter>
    </>
  );
}

export default App;