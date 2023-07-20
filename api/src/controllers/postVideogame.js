const { Videogame, Genre } = require('../db')

const postVideogame = async(name, description, platforms, image, released, rating, Genres) => {

    try {
        if(!name || !description || !platforms || !released || !Genres) {
            throw new Error('Some data is missing');
        } 

        const assignedGenres = await Genre.findAll({
            where: {
                name: Genres
            }
        })

        console.log(name, description, platforms, image, released, rating, Genres)

    
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
        
    } catch (error) {
        throw error;
    }



}


module.exports = postVideogame