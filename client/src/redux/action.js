import axios from 'axios';

export const showVideogames = () =>{
    return async (dispatch) => {
        try {
            const response = await axios('http://localhost:3001/videogames')
            const data = response.data;
            return dispatch({
                type: 'SHOW_VIDEOGAMES',
                payload: data
            })
            
        } catch (error) {
            alert(error.message)            
        }
    }
}

export const showDetails = (id) => {
    
    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/videogames/${id}`);
            const data = response.data;
            data.platforms = data.platforms.map(platform => {
                return `<p>${platform}</p>`
            }).join('\n')
            data.genres = data.genres.map(genre => {
                return `<p>${genre}</p>`
            }).join('\n')
            return dispatch({
                type: 'SHOW_DETAILS',
                payload: data
            })            
        } catch (error) {
            alert(error.message)
        }

    }
}

export const changeRouteHome = () => {
    return {
        type: 'CHANGE_ROUTE_HOME'
    }
}

export const changeRouteDetails = () => {
    return {
        type: 'CHANGE_ROUTE_DETAILS'
    }
}