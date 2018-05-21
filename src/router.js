import { Switch, Route } from 'react-router-dom'; 
import React from 'react'

import Home from './components/Home'; 
import ResultsContainer from './containers/ResultsContainer';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/results' component={ResultsContainer} />
        </Switch>
)

export default Main; 