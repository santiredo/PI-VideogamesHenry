const { Router } = require('express');
// Importar todos los routers;
const getVideogamesHandler = require('../handlers/getVideogamesHandler');
const getByNameHandler = require('../handlers/getByNameHandler');
const getByIdHandler = require('../handlers/getByIdHandler');
const postVideogameHandler = require('../handlers/postVideogameHandler');
const genresHandler = require('../handlers/genresHandler');
const deleteVideogameHandler = require('../handlers/deleteVideogameHandler');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);4

router.get('/videogames', getVideogamesHandler);
router.get('/videogame', getByNameHandler);
router.get('/videogames/:id', getByIdHandler);
router.post('/videogames', postVideogameHandler);
router.get('/genres', genresHandler);
router.delete('/videogames/:id', deleteVideogameHandler)


module.exports = router;
