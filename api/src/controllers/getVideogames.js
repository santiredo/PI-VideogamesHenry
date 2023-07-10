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
        const apiGames = response.data.results;
        
        videogames.push(...apiGames)

        pageNum++
    }

    const dbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    videogames.unshift(...dbGames)

    console.log(videogames.length)

    return videogames    
}

module.exports = getVideogames