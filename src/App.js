import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import Main from './router'; 
import store from './store'; 


import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <MuiThemeProvider>
           <Main/>
          </MuiThemeProvider>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
