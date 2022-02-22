const res = require("express/lib/response");


const users = [
    {
        id: 1,
        name : "marlon yoel",
        lastname: "esteban valencia",
        phone: "3194329073",
        email : "maryoe_95@hotmail.com",
        sex: "M"
    },
    {
        id: 2,
        name : "ingrid paola",
        lastname: "jimenez robles",
        phone: "3004522689",
        email : "ingrid@hotmail.com",
        sex: "F"
    },
    {
        id: 3,
        name : "ivan sebastian",
        lastname: "almeida valencia",
        phone: "3124589636",
        email : "sebas@hotmail.com",
        sex: "M"
    }
]


//todo obtener usuario

const GetUser = ()=> {
    return users;
}

//todo obtener usuario por id

const GetUserById = (id)=>{
   return users.filter(u => u.id == id)
}

//todo agregar nuevo usuario

const AddUser = (NewUser)=> {

    return users.push(NewUser);
}

//todo eliminar un usuario por id

const DeleteUser = (id)=>{

    let  usuario = GetUserById(id); //? capturo el usuario correspondiente a ese id
    let indice = users.findIndex(usuario);

    if(usuario)
    {
         users.splice(indice,1) ;
    }
}

//todo modificar un usuario existente

const UpdateUser = (name, lastname,phone,email,sex)=> {

    let usuario = GetUserById(id);

        usuario.name = name
        usuario.lastname = lastname
        usuario.phone = phone
        usuario.email = email
        usuario.sex = sex

}

module.exports = {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser}