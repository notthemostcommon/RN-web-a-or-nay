import React, { Component } from 'react'
import SearchBar from 'material-ui-search-bar'; 

export default class Search extends Component {

  handleChange(e){
    console.log(e);
    
  }
  render() {
    return (
      <div>
        <SearchBar
          onChange={this.handleChange.bind(this)}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
      </div>
    )
  }
}


