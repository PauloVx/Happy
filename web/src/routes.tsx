import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { OrphanagesMap } from './pages/OrphanagesMap';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route exact path='/app' component={ OrphanagesMap }/>
      </Switch>
    </BrowserRouter>
  )
}