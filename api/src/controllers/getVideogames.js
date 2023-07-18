const axios = require('axios');
require('dotenv').config()
const { Videogame, Genre } = require('../db')
const {API_KEY} = process.env;

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`

const getVideogames = async() => {


    let videogames = [];
    pageNum = 1
    
    while (videogames.length < 100){
        const response = await axios(`${URL}&page=${pageNum}`);
        const completeGames = response.data.results;

        const localGames = completeGames.map(game => {
            return {
                id: game.id,
                name: game.name,
                released: game.released,
                image: game.background_image,
                rating: game.rating,
                platforms: game.platforms.map(platform => platform.platform.name),
                Genres: game.genres.map(genre => genre.name),
            }
        })
        
        videogames.push(...localGames)

        pageNum++
    }

    const dataBase = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    const dbGames = dataBase.map(game => {
        return {
            ...game.toJSON(),
            Genres: game.Genres.map(genre => genre.name)
        }
    })

    videogames.unshift(...dbGames)

    console.log(videogames.length)

    return videogames    
}

module.exports = getVideogames