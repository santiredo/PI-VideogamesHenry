const postVideogame = require('../controllers/postVideogame')


const postVideogameHandler = async(req, res) => {

    try {
        let {name, description, platforms, image, released, rating, genres} = req.body;

        const newVideogame = await postVideogame(name, description, platforms, image, released, rating, genres)

        res.status(200).json(newVideogame)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postVideogameHandler