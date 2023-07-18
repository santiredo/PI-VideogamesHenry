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

export const setPage = (direction, currentPage, videogamesPerPage, videogames) => {


    return (dispatch) => {
        try {
            
            if(direction === -1 || (videogamesPerPage * currentPage) < videogames.length){
                
                if(currentPage + direction > 0){
                    const newPage = currentPage + direction
                    return dispatch({
                        type: 'SET_PAGE',
                        payload: newPage
                    })
                }
            }
            throw new Error(`Page ${currentPage + direction} have no videogames`)
        } catch (error) {
            alert(error.message)
        }
    }
}

export const orderVideogames = (order) => {
    return {
        type: 'ORDER',
        payload: order
    }
}

export const orderByGenre = (genre) => {
    return {
        type: 'GENRE',
        payload: genre
    }
}

export const showDataBase = (origin) => {
    return {
        type: 'ORIGIN',
        payload: origin
    }
}