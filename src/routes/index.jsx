import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Events from '../pages/Events';
import UserRegister from '../pages/UserRegister';
import EventRegister from '../pages/EventRegister';
import AboutUs from '../pages/AboutUs';

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
                <Route path="/event-register" component={EventRegister} />
                <Route path="/about" component={AboutUs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;