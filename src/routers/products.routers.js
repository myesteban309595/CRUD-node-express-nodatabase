
const express = require('express');
const Prouter = express.Router();

const {GetProductsById,GetProducts,PostProduct,GetProductsByName,EditProduct} = require('../models/products.models'); // destructuro cada funcion

//* obtener productos
Prouter.get('/', (req,res)=> {
    res.json(GetProducts());
    console.log(GetProducts());
    console.log(("se han obtenido todos los productos").blue);
});

//todo obtener producto por su nobre o coincidencia del nombre

Prouter.get('/productname', (req,res)=> {
    const {BuscarName} = req.body;
    const Buscar = this.toString(BuscarName);
    GetProductsByName(Buscar);
    res.json("peticion enviada")
})

//todo agregar un producto nuevo

Prouter.post('/agregar', (req,res)=> {
    
    const {id,name,price,category} = req.body;

    const NewProduct = {

        id : id,
        name : name,
        price : price,
        category : category
    }
    
    PostProduct(NewProduct); //! enviamos un parametro con el nuevo post al model

    console.log(("se han agregado un producto").america);
    res.json("producto agregado");
     console.log(NewProduct);
});

//todo editar un producto

Prouter.put('/:id', (req,res) => {

    const {name,price,category} = req.body;
    const {id} = req.params;

    let validacion = false;  //! solo valida si entra o no al if asi se si hay in id

    if(id)
    {
        // podria mostrar el producto encontrado con ese id antes

        console.log((price).red);
        validacion = true; //! valida que ya esta dentro del if osea que existe un id

        const productoEditar = GetProductsById(Number(id));
        console.log(productoEditar);

        EditProduct(name,1000,category);

    }else{ res.status(400).json("el id ingresado no existe") }

    validacion ? res.json("producto actualizado") : res.status(400).json("el id ingresado no existe") 

});

//todo eliminar un producto

Prouter.delete('/:id', (req,res) => {
    
    res.json('se ha eliminado el producto');
    console.log(("producto eliminado").bgRed);

});

module.exports = Prouter;  //! EXPORTAMOS LAS RUTAS