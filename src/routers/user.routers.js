const express = require('express');
const Uroute = express.Router();

const {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser} = require('../models/users.model');

Uroute.get('/', (req,res)=> {

    res.json(GetUser())
    console.log(("se han obtenido todos los usuarios ").bgCyan.black)
    console.log(GetUser());
})

Uroute.post('/', (req, res) => {

    const {id,name,lastname,phone,email,sex} = req.body;

    const NewUser = {
        id: id,
        name:name,
        lastname: lastname,
        phone: phone,
        email:email,
        sex:sex
    }
    AddUser(NewUser);

    res.json("se ha actualizado el usuario")
    console.log(("se ha creado un nuevo usuario ").bgGreen.black);
    console.log(NewUser);
});
module.exports = Uroute;
//validacion ? res.json("se ha actualizado exitosamente el usuario") : res.status(400).json("el usuario o el id no existen");