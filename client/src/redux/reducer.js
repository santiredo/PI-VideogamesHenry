
const initialState = {
    loadingHome: true,
    loadingDetails: true,
    videogames: [],
    renderedVideogames: [],
    videogameDetails: {},
    dbVideogames: [],
    listedByName: [],
    currentPage: 1,
    errors: {
        name:false,
        description:false,
        Genres:false,
        platforms:false,
        image:false,
        released:false,
        rating:false
    }
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
        case 'LOAD_DATA_BASE':
            return {
                ...state,
                dbVideogames: state.videogames.filter(videogame => videogame.id.length > 6)
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
                renderedVideogames: [...state.renderedVideogames].sort((a, b) => {
                    if (action.payload === 'AZ') return a.name.localeCompare(b.name);
                    if (action.payload === 'ZA') return b.name.localeCompare(a.name);
                    if (action.payload === '+') return b.rating - a.rating;
                    return action.payload === '-' && a.rating - b.rating;
                })
            }
        case 'GENRE':
            let filteredVideogames = state.videogames.filter(videogame => videogame.Genres.includes(action.payload))

/*             if(action.payload === 'ShowAll') filteredVideogames = state.videogames
 */            return {
                ...state,
                renderedVideogames: filteredVideogames
            }
        case 'ORIGIN':
            let filteredByOrigin = []

            if(action.payload === 'DataBase') filteredByOrigin = state.videogames.filter(videogame => videogame.id.length > 6)
            if(action.payload === 'Api') filteredByOrigin = state.videogames.filter(videogame => typeof videogame.id === 'number')
/*             if(action.payload === 'ShowAll') filteredByOrigin = state.videogames
 */            return {
                ...state,
                renderedVideogames: filteredByOrigin
            }
        case 'CREATE_VIDEOGAME':
            return {
                ...state,
                dbVideogames: [action.payload, ...state.dbVideogames]
            }
        case 'SEARCH_BY_NAME':
            let renderedByName = state.renderedVideogames.filter(videogame => videogame.name.toLowerCase().includes(action.payload))
            if(action.payload === '') renderedByName = state.videogames
            return {
                ...state,
                renderedVideogames: renderedByName
            }
        case "ORDER_POST_FILTER":
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SHOW_ALL':
            return {
                ...state,
                renderedVideogames: state.videogames
            }
        case 'DELETE_VIDEOGAME':
            return {
                ...state,
                dbVideogames: action.payload,
            }

        default:
            return state;
    }
}
