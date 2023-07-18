const getVideogameByName = require('../controllers/getVideogameByName')

const getByNameHandler = async (req, res) => {

    try {
        const {name} = req.query;

        const videogames = await getVideogameByName(name)

        console.log(videogames.length)

        res.status(200).json(videogames)
        
    } catch (error) {
        if (error.message === "Request failed with status code 404") {
            return res.status(404).json({error: 'El id no se encuentra disponible'})
        }
        return res.status(500).json({error: error.message})        
    }
}

module.exports = getByNameHandler