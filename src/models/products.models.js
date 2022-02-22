

const products =[
    {
        id: 1,
        name: "coca cola",
        price: 2500,
        category : "bebidas"
    },
    {
        id: 2,
        name: "ponque",
        price: 4200,
        category : "mecatos"
    },
    {
        id: 3,
        name: "spedd",
        price: 1500,
        category : "bebidas"
    },
    {
        id: 4,
        name: "cheetos",
        price: 2500,
        category : "mecatos"
    }
]
//todo obtener productos

const GetProducts = ()=> {
    return products;
}

//todo obtener producto por id

const GetProductsById = (id)=> {
    return products.filter(product => product.id == id);
}

//todo obtener producto por nombre o coincidencia

const GetProductsByName = (Buscar) => {
    return products.filter(product => product.name.indexOf(Buscar) =! -1 );
}

//todo crear un nuevo producto

const PostProduct = (NewProduct)=>{

    products.push(NewProduct); //? capturo el nuevo producto aqui y lo almaceno alla
}

//todo Editar un producto

const EditProduct = (id,name,price,category) => {

    const EditedProduct = GetProductsById(id)  //? capturo el producto por id
    
    EditedProduct.name = name;
    EditedProduct.price = price;
    EditedProduct.category = category;

}

//todo eliminar un producto

const DeleteProduct = (id) => {

    const producto = GetProductsById(id)
    
    if(producto)
    {
        const indice = products.findIndex( e => e.id == id)
        products.splice(indice,1);
        //products.splice(products.indexOf(producto),1);
    }
    //console.log(products);
   
   //   const producto = GetProductsById(2)
   //   console.log(producto);
   //   const indice = products.findIndex(e=>e.id == 2);
   //   console.log(indice);
   //   products.splice(indice,1);
   //   console.log("eliminado");
   //   console.log(products);
}


module.exports = {GetProducts,GetProductsById,GetProductsByName,PostProduct,EditProduct,DeleteProduct};