const express = require('express');
const Uroute = express.Router();

const {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser} = require('../models/users.model');

Uroute.get('/', (req,res)=> {

    res.json(GetUser())
    console.log(("se han obtenido todos los usuarios ").bgCyan.black)
})

module.exports = Uroute;
//validacion ? res.json("se ha actualizado exitosamente el usuario") : res.status(400).json("el usuario o el id no existen");