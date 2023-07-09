const axios = require('axios');
const {Videogame} = require('../db');
const {API_KEY} = process.env;

const URL = `https://api.rawg.io/api/games`

const getVideogame = async(req, res) => {

    try {

        const videoGamesArray = []
        let id = 1

        while (videoGamesArray.length  < 100){
            if(id === 18) id = 20;
            if(id === 50) id = 51;
            if(id === 53) id = 54;
            if(id === 66) id = 69;
            if(id === 75) id = 76;
            if(id === 81) id = 84;
 
            const response = await axios(`${URL}/${id}?key=${API_KEY}`);
            
            const gameData = response.data
            console.log(gameData.id)
            const platforms = gameData.platforms.map(platform => platform.platform.name);

            videoGamesArray.push(gameData.name)

            await Videogame.findOrCreate({
                where:{
                    name: gameData.name.toLowerCase(),
                    description: gameData.description,
                    platforms: platforms,
                    img: gameData.background_image,
                    released: gameData.released,
                    rating: gameData.rating,
                }
            })            
            id++
        }

        const videoGames = await Videogame.findAll()
        res.status(200).json(videoGames)

    } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}

module.exports = getVideogame