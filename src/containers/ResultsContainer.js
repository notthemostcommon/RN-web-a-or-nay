import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsList from '../components/ResultsList';
import {searchHasErrored} from '../actions/searchActions';


class ResultsContainer extends Component {
    

       
  render() {
      // console.log(this.props.results);
      

    return (
      <div>
        <h1>Results</h1>
        <ResultsList  />
      </div>
    )
  }
}
// const mapStateToProps = state => {
//     console.log("redux results", state);
//     return {
//         results: state.results, 
//         searchHasErrored: state.error.searchHasErrored, 
//         isLoading: state.loading.searchIsLoading
//       }
// }


export default ResultsContainer; 
// export default connect(mapStateToProps)(ResultsContainer); 