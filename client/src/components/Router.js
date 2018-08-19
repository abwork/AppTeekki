import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Medicine from './Medicine';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact /> 
            <Route path="/medicine" component={Medicine} />
        </Switch>
    </BrowserRouter>
);  

export default Router;