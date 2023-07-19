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
            data.Genres = data.Genres.map(genre => {
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

export const createVideogame = (videogame) => {

    return async (dispatch) => {

        try {
            const {name, image, Genres, description, platforms, rating, released} = videogame

            console.log(typeof rating)
            console.log(rating)

            const response = await axios.post('http://localhost:3001/videogames', {name, image, Genres, description, platforms, rating, released})
            const dbVideogame = response.data

            return dispatch({
                type: 'CREATE_VIDEOGAME',
                payload: dbVideogame
            })
            
        } catch (error) {
            alert(error.message)
        }
    }
}

export const searchByName = (name) => {
    console.log(name)
    return {
        type: 'SEARCH_BY_NAME',
        payload: name
    }
}