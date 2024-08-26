let A= [[3,4,5,6],[7,8,9]];

const datosArreglo = () => {
    for (let index in A) {
        let datos = A[index];
        for (let i in datos) {
            let valores = datos[i];
            console.log(`${i}=${valores}`);
        }
    }
}
datosArreglo();