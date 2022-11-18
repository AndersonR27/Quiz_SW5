const express = require('express');
const { getAllEquipos, getSingleEquipo, addEquipo, updateEquipo, deleteEquipo } = require('../controllers/Equipo_controller');
const { body } = require("express-validator");

const router = express.Router({ mergeParams: true });

const equipoCreationValidators = [
    body('nombre').notEmpty().isString(),
    body('copas').notEmpty().isString(),
    body().custom(body => {
        const keys = ['nombre', 'copas'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Se agregaron parametros extra')
]

const equipoUpdateValidators = [
    body('nombre').notEmpty().isString(),
    body('copas').notEmpty().isString(),
    body().custom(body => {
        const keys = ['nombre', 'copas'];
        return Object.keys(body).every(key => keys.includes(key));
    }).withMessage('Se agregaron parametros extra')
]

router.get('/equipos', getAllEquipos);
router.get('/equipos/:idEquipo', getSingleEquipo);
router.post('/equipos', equipoCreationValidators, addEquipo);
router.put('/equipos/:idEquipo', equipoUpdateValidators, updateEquipo);
router.delete('/equipos/:idEquipo', deleteEquipo);

module.exports = router;