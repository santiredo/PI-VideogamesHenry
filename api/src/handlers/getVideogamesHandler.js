const getVideogames = require('../controllers/getVideogames')

const getVideogamesHandler = async(req,res) => {

    try {
        const videogames = await getVideogames()

        return res.status(200).json(videogames);
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getVideogamesHandler