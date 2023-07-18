const { Videogame, Genre } = require('../db')

const postVideogame = async(name, description, platforms, image, released, rating, Genres) => {

    if(!name || !description || !platforms || !released) {
        return res.status(401).send('Faltan datos')
    }

    const assignedGenres = await Genre.findAll({
        where: {
            name: Genres
        }
    })

    name = name.toLowerCase();

    const newVideogame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        released,
        rating,
    })

    await newVideogame.addGenres(assignedGenres)

    return newVideogame

}


module.exports = postVideogame