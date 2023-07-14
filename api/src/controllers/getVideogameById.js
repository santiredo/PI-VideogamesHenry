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
        return {
            id: game.data.id,
            name: game.data.name,
            released: game.data.released,
            image: game.data.background_image,
            rating: game.data.rating,
            platforms: game.data.platforms.map(platform => platform.platform.name),
            genres: game.data.genres.map(genre => genre.name),
        }
    }

}

module.exports = getVideogameById