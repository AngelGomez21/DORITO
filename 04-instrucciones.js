const prompt=require(`prompt-sync`)();

/* let numero1
let numero2

numero1=prompt("ingrese el numero 1:");
numero2=prompt("Ingrese el  valor 2:");


console.log(numero1*numero2); */
 

/* realizar un programa que contenga un arreglo indef 
en el que solicite a traves del teclado el tamaño y
se ingrese por lo menos 4 valores con un ciclo de cualquier tipo 
utilizando un ciclo para ingresar los datos
imrpimir los valores en pantalla */

/* let datos = [];

for (let i = 0; < datos; i++) {
  let datos = prompt(`Ingrese el datos ${i + 3}:`);
  datos.push(dato);
}
console.log("datos ingresados:",datos); */

let arreglo=[];
/*
function infoArreglo(){
    const dimension=parseInt(prompt("ingresa el tamaño del arreglo: "))
    for(let i=0; i<dimension;i++){
        let datos=prompt("ingresa datos: ")
        arreglo[i]=datos;
    }
    arreglo.map((data)=>{
        console.log(arreglo);
        
    });

}
    infoArreglo() */

let informacion;
const datos = () => {
    const dimension = parseInt(prompt("Ingresa el tamaño del arreglo: "));
    for(let i=0; i< dimension; i++) {
        let nombre = prompt("Ingrese el nombre: ");
        let edad = parseInt(prompt("Ingresa la edad: "));
        informacion = {
            nombre,
            edad,
        };
        arreglo.push(informacion);
    }

    arreglo.map((nike) => {
        console.log(`El nombre es ${nike.nombre} y tiene ${nike.edad} años`)
    });
    console.log(arreglo);
    
}
datos();