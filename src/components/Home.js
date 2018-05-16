import React, { Component } from 'react';
import Search from './Search'; 
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>A or Nay</h1>
        <Search />
      </div>
    )
  }
};
