const axios = require('axios');
const {Videogame} = require('../db')

const {API_KEY} = process.env;

const URL = `https://api.rawg.io/api/games`

const getVideogameById = async(id) => {


    if(id.length > 6){
        const game = await Videogame.findByPk(id)
        return game
    } else {
        const game = await axios(`${URL}/${id}?key=${API_KEY}`)
        return game.data
    }

}

module.exports = getVideogameById