const axios = require('axios');
const { Op } = require('sequelize')
const {Videogame} = require('../db')

const {API_KEY} = process.env;

const URL = `https://api.rawg.io/api/games`

const getVideogameByName = async(req, res) => {
    const {name} = req.query


    try {

        const DBgame = await Videogame.findAll({
            where:{
                name :{
                    [Op.like]: `%${name.toLowerCase()}%`
                }
            }
        })
        DBgame.splice(15, DBgame.length-15)


        if(DBgame.length < 15){
            const resolve = await axios(`${URL}?search=${name}&key=${API_KEY}`);
            const APIgames = resolve.data.results
            let names = DBgame.map(game => game.name)

            APIgames.forEach((game) => {

                console.log(game.name)
                if(!names.includes(game.name) && DBgame.length < 15 && game.name.toLowerCase().includes(name.toLowerCase())){
                    const platforms = game.platforms.map(platform => platform.platform.name);

                    const newGame = {
                        id: game.id.toString(),
                        name: game.name.toLowerCase(),
                        description: game.description,
                        platforms: platforms,
                        img: game.background_image,
                        released: game.released,
                        rating: game.rating,                        
                    }
                    DBgame.push(newGame)
                }                
            });
        }

        console.log(DBgame.length)

        return res.status(200).send(DBgame)

    } catch (error) {
        if (error.message === "Request failed with status code 404") {
            return res.status(404).json({error: 'El id no se encuentra disponible'})
        }
        return res.status(500).json({error: error.message})        
    }
}

module.exports = getVideogameByName