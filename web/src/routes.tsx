import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { OrphanagesMap } from './pages/OrphanagesMap';
import { CreateOrphanage } from './pages/CreateOrphanage';
import { Orphanage } from './pages/Orphanage';

import { Login } from './pages/Login';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/app' component={ OrphanagesMap }/>
        <Route path='/orphanages/create' component={ CreateOrphanage }/>
        <Route path='/orphanages/:id' component={ Orphanage }/>
        <Route path='/login' component={ Login }/>
      </Switch>
    </BrowserRouter>
  )
}