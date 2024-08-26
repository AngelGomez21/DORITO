let A= [[3,4,5,6],[7,8,9]];

const datosArreglo = () => {
    let rowindex = 0;

    while (rowindex < A.length){
        let datos = A[rowindex];
        let colIndex = 0;

        while (colIndex < datos.length) {
            console.log(`${colIndex}=${datos[colIndex]}`);
            colIndex++
        }
        rowindex++;
    }
}

datosArreglo();