//location of all routes, stateless so no class needed
import React from 'react';
import Home from './home';
import {Switch, Route} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import People from './people';
import Plays from './plays';
import Actors from './actors';
import Gallery from './gallery';
import NotFound from './not-found';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/rolunk" component={About}/>
        <Route path="/kapcsolat" component={Contact}/>
        <Route exact path="/tagok" component={People}/>
        <Route path="/szerepek" component={Plays}/>
        <Route path="/tagok/:name" component={Actors}/>
        <Route path="/galeria" component={Gallery}/>
        <Route component={NotFound}/>
    </Switch>
)

export default Main;