const prompt=require(`prompt-sync`)();

let arreglo=[];

let informacion;
const datos = () => {
    const dimension = parseInt(prompt("Ingresa el tamaño del arreglo: "));
    for(let i=0; i< dimension; i++) {
        let nombre = prompt("Ingrese el nombre: ");
        let apellido = prompt("Ingresa el apellido: ");
        let edad = parseInt(prompt("Ingresa la edad: "));
        let rfc = parseInt(prompt("Ingrese su rfc: "));
        let direccion = prompt("Ingrese su direccion: ");
        let telefono = parseInt(prompt("Ingrese su telefono: "));
        informacion = {
            nombre,
            apellido,
            edad,
            rfc,
            direccion,
            telefono

        };
        arreglo.push(informacion);
    }

    arreglo.map((adn) => {
        console.log(`El nombre es ${adn.nombre} con apellido ${adn.apellido}  con ${adn.edad} años su frc es ${adn.rfc} vive en ${adn.direccion} su telefono es ${adn.telefono} `)
    });
    console.log(arreglo);
    
}
datos();