const initialState = {
    loadingHome: true,
    loadingDetails: true,
    videogames: [],
    renderedVideogames: [],
    videogameDetails: {},
    currentPage: 1,
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case 'SHOW_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                renderedVideogames: action.payload,
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
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'ORDER':
            return {
                ...state,
                renderedVideogames: [...state.videogames].sort((a, b) => {
                    if (action.payload === 'AZ') return a.name.localeCompare(b.name);
                    if (action.payload === 'ZA') return b.name.localeCompare(a.name);
                    if (action.payload === '+') return b.rating - a.rating;
                    return action.payload === '-' && a.rating - b.rating;
                })
            }
        case 'GENRE':
            let filteredVideogames = state.videogames.filter(videogame => videogame.genres.includes(action.payload))

            if(action.payload === 'ShowAll') filteredVideogames = state.videogames
            return {
                ...state,
                renderedVideogames: filteredVideogames
            }

        default:
            return state;
    }
}
