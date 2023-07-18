const getVideogames = require('../controllers/getVideogames')


const getVideogameByName = async(name) => {
    
        let videogames = await getVideogames()

        videogames = videogames.filter(game => {
            return game.name.toLowerCase().includes(name.toLowerCase())
        })

        return videogames.slice(0, 15)

/*         const DBgame = await Videogame.findAll({
            where:{
                name :{
                    [Op.like]: `%${name.toLowerCase()}%`
                }
            }
        })
        DBgame.slice(0, 15)


        if(DBgame.length < 15){
            const resolve = await axios(`${URL}?search=${name}&key=${API_KEY}`);
            const APIgames = resolve.data.results
            let names = DBgame.map(game => game.name)

            APIgames.forEach((game) => {

                console.log(game.name)
                if(!names.includes(game.name) && DBgame.length < 15 && game.name.toLowerCase().includes(name.toLowerCase())){
                    const platforms = game.platforms.map(platform => platform.platform.name);

                    const newGame = {
                        id: game.id.toString(),
                        name: game.name.toLowerCase(),
                        description: game.description,
                        platforms: platforms,
                        img: game.background_image,
                        released: game.released,
                        rating: game.rating,                        
                    }
                    DBgame.push(newGame)
                }                
            });
        } */


}

module.exports = getVideogameByName