//crear una lista com diferentes tipos de datos
let datos = [{
    nombre: "Angel",
    apellido: "Gomez",
    edad: 18,
    estudiante: false
},
{
    nombre:"Gael",
    apellido:"Aguilar",
    edad:8,
    estudiante: true
}
]
let arreglos = ["Angel", 18, true]


let info = () => {
    /* for ( let arr in arreglos)
        console.log(`${arr}:${arreglos[arr]}`);
        */
       
   /*    for (let lista in datos){
          console.log(`${lista} : ${datos[lista]}`);

      }*/

    /*  let valora = Object.values(datos)
      valora.map((data,index) => {
        console.log(`${data}`);

      })
      */

    /*    let index = 0
    for(let i of valora){
            console.log(`${index}:${i}`);
            index ++
    } */
    /*let valora = Object.entries(datos)
    for (let i of valora){
        console.log(i);
        
    }*/

    //entrar en los otros valores
    /*  Object.entries(datos).forEach (([key,value]) => {
        console.log(`${key}:${value}`);
            
    })*/

    /*for (let i in datos){
        let ale = datos[i]
        for( let j in ale){
            console.log(ale[j]);

        }
    }*/

    //facil y accsesible
    datos.map((cosa)=>{
        console.log(`Su nombre es ${cosa.nombre} y tiene ${cosa.edad} años`);

    })
}


info()