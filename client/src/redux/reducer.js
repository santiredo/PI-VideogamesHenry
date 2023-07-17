const initialState = {
    loadingHome: true,
    loadingDetails: true,
    videogames: [],
    videogameDetails: {},
    currentPage: 1,
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case 'SHOW_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                loadingHome: false
            }
        case 'SHOW_DETAILS':
            return {
                ...state,
                videogameDetails: action.payload,
                loadingDetails: false
            }
        case 'CHANGE_ROUTE_HOME':
            return {
                ...state,
                loadingHome: true
            }
        case 'CHANGE_ROUTE_DETAILS':
            return {
                ...state,
                loadingDetails: true
            }
            
        default:
            return state;
    }
}
