// const prompt = require("prompt-sync")()

//Arreglos y ciclos
/* let datos = [
[4,5,6,7,8],
[8,2,7,9]]
 */
/* console.log(datos); */
/* let arreglodatos=()=>{
    for (let i = 0; i< datos.length; i++) {
        const numer = datos[i];
        console.log(`los numeros ${numer}, en el indice ${i}`);
        
    }
}
arreglodatos() */

/* let datos = [
    {
        nombre:"Mario",
        apellido:"Gomez",
        edad:19,
        estudiante: true
    },
    {
        nombre:"Gael",
        apellido:"Aguilar",
        edad:8,
        estudiante: true
    }
]

let funcion =() => {
    for(let i in datos){
        let dash = datos[i]
        console.log(dash);
        
    }
}

funcion() */

/* const prompt = require ("prompt-sync")()

let arreglo = []
let informacion

let funcion = () =>{
    let cantidad = parseInt(prompt("Cuantas personas son:"))

    for(let i=0; i< cantidad ; i++){
        let nombre = prompt("Cual es tu nombre: ")
        let edad = parseInt(prompt("Cual es tu edad: "))
        informacion={
            nombre,
            edad
        }
        arreglo.push(informacion)
    }
    for(let i in arreglo){
        let datos = arreglo[i]
        console.log(`Hola ${datos.nombre} tienes ${datos.edad}`);
    }
}
funcion() */

class persona {

    constructor(nombre, apellido, edad, matricula, telefono){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
        this._matricula = matricula
        this._telefono = telefono
    }
    saludar(){
        console.log(`Hola ${this._nombre} ${this._apellido} tienes ${this._edad} con matricula ${this._matricula} y su numero ${this._telefono}`);
        
    }
}

let persona1 = new persona("Mario","Gomez",19,"23e20096",9341342754)
persona1.saludar()

