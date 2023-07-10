const getGenres = require('../controllers/getGenre')

const genresHandler = async (req, res) => {

    try {
        const genres = await getGenres()

        res.status(200).json(genres)
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = genresHandler