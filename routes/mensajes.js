/*
    path: api/mensajes
*/
const { Router } = require('express');
const { obtenerChat } = require('../controllers/mensajes');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Validar JWT
router.get('/:de', validarJWT, obtenerChat);

module.exports = router;