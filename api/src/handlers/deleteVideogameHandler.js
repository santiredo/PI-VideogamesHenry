const deleteVideogame = require('../controllers/deleteVideogame')

const deleteVideogameHandler = async(req, res) => {
    
    try {
        const {id} = req.params;

        const deletedVideogame = await deleteVideogame(id)

        res.status(200).json(deletedVideogame)
        
    } catch (error) {
        res.status(500).json({error: error.message}) 
    }
}

module.exports = deleteVideogameHandler