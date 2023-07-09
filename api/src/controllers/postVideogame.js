const { Videogame, Genre } = require('../db')

const postVideogame = async(req, res) => {

    try {
        let { name, description, platforms, img, released, rating, genres} = req.body;

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

        res.status(200).json(newVideogame)


    } catch (error) {
        res.status(500).json({error: error.message})
    }

}


module.exports = postVideogame