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

    const  usuario = GetUserById(id); //? capturo el usuario correspondiente a ese id
    
    if(usuario)
    {
        const Uindice = users.findIndex(i => i.id == id);
        users.splice(Uindice,1) ;   
    }
}

//todo modificar un usuario existente

const UpdateUser = (id,name, lastname,phone,email,sex)=> {

    const usuario = GetUserById(id);
    //console.log(usuario)

        usuario.name = name
        usuario.lastname = lastname
        usuario.phone = phone
        usuario.email = email
        usuario.sex = sex
        
        // const actualizado = usuario.lastname
        // console.log(actualizado);
}

module.exports = {UpdateUser,DeleteUser,AddUser,GetUserById,GetUser}