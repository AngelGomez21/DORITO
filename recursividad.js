/* function fibo(n){
    let arr=[0,1];
    for (let i=2; i<n; i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr;
}
console.log(fibo(6)); */

/* function fibo(n) {
    let Inicial = 0
    let temporal = 1
    let actual = 0
    for(i=2; i<n; i++){

        Inicial=temporal
        temporal=actual
        actual=Inicial+temporal
        console.log(actual);
    }
}
fibo(7); */

function fibo(n){
    if (n<2) return n
    return (fibo)(n-1)+fibo(n-2)
}