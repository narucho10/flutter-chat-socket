const { response } = require('express');
const Mensaje = require('../models/mensaje');

const obtenerChat = async (req, res =  response) => {
    try {
        const miId = req.uid;
        const mensajesDe = req.params.de;

        const last30 = await Mensaje.find({
            $or: [{ de: miId, para: mensajesDe }, { de: mensajesDe, para: miId }]
        })
        .sort({ createdAt: 'desc'})
        .limit(30);

        res.json({
            ok:true,
            mensajes: last30
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: "false",
            msg: "Pongase en contacto con el administrador"
        });
    }
}

module.exports = {
    obtenerChat
}