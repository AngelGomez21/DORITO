//Factory funtion
const persona={
    nombre:"Angel",
    edad:18
}
const persona2={
    nombre:"Gael",
    edad:8
}

function datosPersona(nombre,edad){
    return{
        nombre:nombre,
        edad:edad,
        active:true
    }
}

let persona1=datosPersona("Angel",18);
let persona3=datosPersona("Gael",8);
//console.log(persona1,persona3);
//camel case
const datosUsario={
    nombre:"Jarinsi",
    edad:17,
    password:"300820",
    direccion:{
        colonia:"ciprian cabrera",
        calle:"Principal",
        numext:123
    },
    sueldo:10.000,
     guardarUsuario:function(){
console.log("Guardar Usuario:....");

    }
}
//datosUsario.guardarUsuario();

//Add registro y parámetros a los objetos definidos
const user={id:1};
user.nombre="Angel"
user.guardarUser=function(){
    console.log("Guardar user....");
    
}
console.log(user);
/* let funcionGuardar= */user.guardarUser();
/* console.log(funcionGuardar);
 */
//objetos definidos
const person=Object.seal({id:1,nombre:"jarinsi"});
person.id=2;
person.nombre="Guadalupe"
person.edad=24;

//console.log(person);
//Pasar funciones como parámetros
function Pitbull(nombre){
this._nombre=nombre;
}


function Animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1=Animal(Pitbull,"Godi")
console.log(animal1);
