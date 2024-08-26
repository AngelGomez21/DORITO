let A= [[3,4,5,6],[7,8,9]];

const datosArreglo = () => {
    A.forEach((datos, index) => {
        datos.forEach((valores, i) => {
            console.log(`${i}=${valores}`);
        })
    })
}

datosArreglo();