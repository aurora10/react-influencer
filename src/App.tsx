import React from 'react';
import './App.css';

import Main from "./pages/Main";
import {BrowserRouter, Route } from "react-router-dom";
import Login from "./public/Login";
import Register from "./public/Register";
import Rankings from "./pages/Rankings";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="App">

    <BrowserRouter>

        <Route path={'/'} exact component={Main} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/rankings'} component={Rankings} />
        <Route path={'/stats'} component={Stats} />

    </BrowserRouter>

    </div>
  );
}

export default App;
