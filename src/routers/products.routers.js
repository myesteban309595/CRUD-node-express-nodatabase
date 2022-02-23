
const express = require('express');
const Prouter = express.Router();

const {GetProductsById,GetProducts,PostProduct,GetProductsByName,EditProduct,DeleteProduct} = require('../models/products.models'); // destructuro cada funcion

//* obtener productos
Prouter.get('/', (req,res)=> {
    res.json(GetProducts());
    console.table(GetProducts());
    console.log(("se han obtenido todos los productos ").bgGreen.black);
});

//todo obtener producto por su nobre o coincidencia del nombre

Prouter.get('/productname', (req,res)=> {
    const {BuscarName} = req.body;
    const Buscar = this.toString(BuscarName);
    GetProductsByName(Buscar);
    res.json("peticion enviada ")
})

//todo agregar un producto nuevo

Prouter.post('/', (req,res)=> {
    
    const {id,name,price,category} = req.body;

    const NewProduct = {

        id : id,
        name : name,
        price : price,
        category : category
    }
    
    PostProduct(NewProduct); //! enviamos un parametro con el nuevo post al model

    res.json("producto agregado");
    console.table(NewProduct);
    console.log(("se han agregado un producto ").bgGreen.black);
});

//todo editar un producto

Prouter.put('/:id', (req,res) => {

    const {name,category} = req.body;
    const {price} = req.body;
    const {id} = req.params;

    let validacion = false;  //! solo valida si entra o no al if asi se si hay in id

    if(id)
    {
        //console.log(name,price,category); OK
        validacion = true; //! valida que ya esta dentro del if osea que existe un id
        console.log(("producto a editar").yellow);

        const productoEditar = GetProductsById(id);
        console.table(productoEditar);
        console.log(("se ha editado un producto ").bgCyan.black);


        EditProduct(name,price,category);

    }

    validacion ? res.json("producto actualizado") : res.status(400).json("el id ingresado no existe") 

});

//todo eliminar un producto

Prouter.delete('/:id', (req,res) => {

    const {id} = req.params
    res.json('se ha eliminado el producto');
    console.table(GetProductsById(id))
    console.log(("producto eliminado ").bgRed);
   
    DeleteProduct(id)
});

module.exports = Prouter;  //! EXPORTAMOS LAS RUTAS