import React, { useState } from 'react';
import Router from './router/routes';
import {  BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './styles/globalStyles';

function App() {
  const token = window.localStorage.getItem('token')
  const[buttonLogin, setButtonLogin] = useState(token? 'Logout' : 'Login')

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Header buttonLogin={buttonLogin} setButtonLogin={setButtonLogin}/>
    <Router setButtonLogin={setButtonLogin} />
    </BrowserRouter>
    </>
  );
}

export default App;