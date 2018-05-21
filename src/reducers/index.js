import { combineReducers } from 'redux'; 
import { fetchSearch, searchHasErrored, searchIsLoading, results } from './searchReducer'; 


export default combineReducers({
    // search: fetchSearch, 
    error: searchHasErrored, 
    loading: searchIsLoading, 
    results: results, 
}); 
