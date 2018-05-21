import { FETCH_SEARCH, SEARCH_IS_LOADING, SEARCH_HAS_ERRORED, SEARCH_DATA_SUCCESS } from '../actions/types'; 
// import { searchHasErrored } from '../actions/searchActions';

const initialState = {
    searchResults: [], 
    searchHasErrored: false, 
    searchIsLoading: false,
}

// export function fetchSearch (state = initialState, action) { 
//     switch (action.type) {
//         case FETCH_SEARCH:
//             return {
//                 searchResults: action.payload
//             }
//             break;
            
    
//         default:
//             return state
//             break;
//     }
// }
export function searchHasErrored(state = false, action) {
    switch (action.type) {
        case SEARCH_HAS_ERRORED:
            return {
                searchHasErrored: action.hasErrored
            }
        default:
            return state;
    }
}
export function searchIsLoading(state = false, action) {
    switch (action.type) {
        case SEARCH_IS_LOADING:
            return {
                searchIsLoading: action.isLoading
            }
        default:
            return state;
    }
}

export function results(state = initialState, action) {
    switch (action.type) {
        case SEARCH_DATA_SUCCESS:
            return {
                searchResults: action.results
            }
        default:
            return state;
    }
}