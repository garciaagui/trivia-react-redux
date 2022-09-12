import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <main>
      <section className="container-fluid">
        <div className="row justify-content-center align-items-center h100">
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/game" component={ Game } />
            <Route exact path="/settings" component={ Settings } />
            <Route exact path="/feedback" component={ Feedback } />
          </Switch>
        </div>
      </section>
    </main>
  );
}
