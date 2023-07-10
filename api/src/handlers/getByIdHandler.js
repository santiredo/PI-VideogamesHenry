const getVideogameById = require('../controllers/getVideogameById')


const getByIdHandler = async(req, res) => {

    try{
        const {id} = req.params;

        console.log(id)

        const videogame = await getVideogameById(id)

        res.status(200).json(videogame)

    } catch (error) {
        if (error.message === "Request failed with status code 404") {
            return res.status(404).json({error: 'El id no se encuentra disponible'})
        }
        return res.status(500).json({error: error.message}) 
    }
}

module.exports = getByIdHandler