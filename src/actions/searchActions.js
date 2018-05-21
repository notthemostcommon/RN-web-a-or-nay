import { FETCH_SEARCH, SEARCH_HAS_ERRORED, SEARCH_IS_LOADING, SEARCH_DATA_SUCCESS } from './types'; 
import axios from 'axios'; 

export const fetchSearch = (searchData) => dispatch => {    
        dispatch(searchIsLoading(true));         
        axios.get("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q="+searchData)
            .then(response => {
                console.log("api res", response);
                
                if (response.status != 200){                    
                    throw Error(response.statusText); 
                }
                dispatch(searchIsLoading(false));                 
                return response; 
            })
            .then((results) => dispatch(searchDataSuccess(results.data)))
            .catch(() => dispatch(searchHasErrored(true)))
            }; 
        

export function searchHasErrored(bool) {
    return {
        type: SEARCH_HAS_ERRORED, 
        hasErrored: bool
    }
}

export function searchIsLoading(bool) {
    return {
        type: SEARCH_IS_LOADING,
        isLoading: bool
    };
}

export function searchDataSuccess(results) {
    return {
        type: SEARCH_DATA_SUCCESS,
        results: results
    };
}

