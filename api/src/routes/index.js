const { Router } = require('express');
// Importar todos los routers;
const getVideogame = require('../controllers/getVideogame');
const getVideogameByName = require('../controllers/getVideogameByName');
const getVideogameById = require('../controllers/getVideogameById');
const postVideogame = require('../controllers/postVideogame');
const getGenre = require('../controllers/getGenre');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);4

router.get('/videogames', getVideogame);
router.get('/videogame', getVideogameByName);
router.get('/videogames/:id', getVideogameById);
router.post('/videogames', postVideogame);
router.get('/genres', getGenre);


module.exports = router;
