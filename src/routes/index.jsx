import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

function Router()
{
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/home" from="/" />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;