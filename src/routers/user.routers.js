const express = require('express');
const Uroute = express.Router();

const {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser} = require('../models/users.model');

Uroute.get('/', (req,res)=> {

    res.json(GetUser())
    console.log(GetUser());
    console.log(("se han obtenido todos los usuarios ").bgCyan.black)
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
    console.log(NewUser);
    console.log(("se ha creado un nuevo usuario ").bgGreen.black);
});

Uroute.put('/:id', (req,res)=> {

 const {name,lastname,phone,email,sex} = req.body;
 const {id} = req.params

 const productoAeditar = GetUserById(Number(id));
 let validation = false;
 
 if(id)
 {
     
     console.log(("producto a editar").yellow);
     console.log(productoAeditar);
     UpdateUser(id,name,lastname,phone,email,sex)
     validation = true;
 }

 validation ? res.json("se ha actualizado el usuario satisfactoriamente") : res.status(400).json("el usuario o id no existen")


})

module.exports = Uroute;

