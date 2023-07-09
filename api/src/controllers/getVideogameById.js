const axios = require('axios');
const {Videogame} = require('../db')

const {API_KEY} = process.env;

const URL = `https://api.rawg.io/api/games`

const getVideogameById = async(req, res) => {

    try {

        const {id} = req.params;


        if(id.length > 6){
            const game = await Videogame.findByPk(id)
            return res.status(200).json(game)
        } else {
            const game = await axios(`${URL}/${id}?key=${API_KEY}`)
            return res.status(200).json(game.data)
        }

    } catch (error) {
        if (error.message === "Request failed with status code 404") {
            return res.status(404).json({error: 'El id no se encuentra disponible'})
        }
        return res.status(500).json({error: error.message})        
    }
}

module.exports = getVideogameById