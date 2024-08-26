let A=[[3,4,5,6],[7,8,9]];

const datosArreglo = () => {
    let index = 0;
    for (let datos of A) {
        for (let i = 0; i < datos.length; i++) {
            let valores = datos[i];
            console.log(`${i}=${valores}`);
        }
        index++;
    }
}

datosArreglo();