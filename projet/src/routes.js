import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Template from './components/Template';
import contact from './components/Contact';


export default ()=> (

    <Switch>
        <Route path="/" exact component={Template}/>
        <Route path="/contact" exact component={contact}/>



    </Switch>

);