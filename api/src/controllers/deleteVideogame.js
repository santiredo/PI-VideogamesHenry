const { Videogame } = require("../db")


const deleteVideogame = async(id) => {

    await Videogame.destroy({
        where: {
            id
        }
    })

    return await Videogame.findAll()
}

module.exports = deleteVideogame;