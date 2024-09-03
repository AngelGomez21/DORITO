 const persona={
    nombre: "Angel",
    edad: 19,
    sexo: "m"
}
/*
let nombre,edad,sexo
({nombre,edad,sexo}=persona)
console.log(nombre,edad,sexo);

const datos=[1,]

let []

 */
//dar un solo dato
let nombre,edad,sexo;
let{...datos}=persona
datos.nombre="Juan"
console.log(datos.edad);
