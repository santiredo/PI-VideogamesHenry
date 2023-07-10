const { Videogame, Genre } = require('../db')

const postVideogame = async(name, description, platforms, img, released, rating, genres) => {

    if(!name || !description || !platforms || !released) {
        return res.status(401).send('Faltan datos')
    }

    const assignedGenres = await Genre.findAll({
        where: {
            name: genres
        }
    })

    name = name.toLowerCase();

    const newVideogame = await Videogame.create({
        name,
        description,
        platforms,
        img,
        released,
        rating,
    })

    await newVideogame.addGenres(assignedGenres)

    return newVideogame

}


module.exports = postVideogame