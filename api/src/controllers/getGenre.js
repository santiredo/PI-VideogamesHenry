const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db')

const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`


const getGenre = async(req, res) => {

    try {

        const response = await axios(URL)
        const genres = response.data.results

        genres.forEach(async(genre) => {
            await Genre.findOrCreate({
                where: {
                    name: genre.name
                }
            })
            
        });
        
        console.log(genres)
        
        res.status(200).json(genres)        

    } catch (error) {
        res.status(500).json({error: error.message})
    }

}


module.exports = getGenre