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