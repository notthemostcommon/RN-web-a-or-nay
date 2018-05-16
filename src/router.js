import { Switch, Route } from 'react-router-dom'; 
import React from 'react'

import Home from './components/Home'; 

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            
        </Switch>
)

export default Main; 