
const express = require('express');  //* requerimos express
const colors = require('colors');

const app = express();
const PORT = process.env.PORT || 3000 ; //* configuracion puerto de escucha


app.use(express.json()); //* convertir codigo maquina a json

//! ***********  R U T A S  G E N E R A L E S  **************
const usuarios = require('./routers/user.routers')
const productos = require('./routers/products.routers') 

app.use('/productos', productos)
app.use('/usuarios', usuarios)

//! *********************************************************

//todo configuramos el puerto de escucha de express

app.listen(3000, ()=> {

    console.log(("escuchando desde el puerto "+ PORT + " ").inverse);
})

console.log(("hola mundo ").black.bgYellow);