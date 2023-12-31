const postVideogame = require('../controllers/postVideogame')


const postVideogameHandler = async(req, res) => {

    try {
        let {name, description, platforms, image, released, rating, Genres} = req.body;

        const newVideogame = await postVideogame(name, description, platforms, image, released, rating, Genres)

        console.log(newVideogame)

        res.status(200).json(newVideogame)
        
    } catch (error) {
        res.status(400).json({ error: error.message })    }
}

module.exports = postVideogameHandler