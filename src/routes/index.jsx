import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Events from '../pages/Events';
import UserRegister from '../pages/UserRegister';

function Router()
{
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/home" from="/" />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Auth} />
                <Route path="/events" component={Events} />
                <Route path="/user-register" component={UserRegister} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;