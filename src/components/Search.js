import React, { Component } from 'react'
import SearchBar from 'material-ui-search-bar'; 
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchSearch } from '../actions/searchActions'
import { withRouter } from 'react-router-dom'

class Search extends Component {
  constructor(){
    super()

    this.state = {
      searchQuery: ''
    }
  }
  
  
  handleChange(e){
    console.log(this.state.searchQuery);
    this.setState({searchQuery: e})
    
  }
  onSubmit(){
    console.log("submitted");
    this.props.fetchSearch(this.state.searchQuery); 
    this.props.history.push('/results'); 
    
    
  }
  render() {
    return (
      <div>
        <SearchBar
          onChange={this.handleChange.bind(this)}
          onRequestSearch={this.onSubmit.bind(this)}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSearch: (query) = dispatch(fetchSearch(query))
//   }; 
// }; 
// const mapStateToProps = state => ({
//   results: state.search.results
// }); 
// Search.propTypes = {
//   fetchSearch: PropTypes.func.isRequired
// }; 
export default withRouter( connect(null, { fetchSearch })(Search)); 
