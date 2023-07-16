const initialState = {
    loading: true,
    videogames: [],
    currentPage: 1,
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){
        case 'SHOW_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                loading: false
            }
            
        default:
            return state;
    }
}
