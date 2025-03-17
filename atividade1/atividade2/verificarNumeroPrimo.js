
function verificarNumeroPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log(verificarNumeroPrimo(0)); 
console.log(verificarNumeroPrimo(1)); 
console.log(verificarNumeroPrimo(2)); 
console.log(verificarNumeroPrimo(3)); 
console.log(verificarNumeroPrimo(7)); 
console.log(verificarNumeroPrimo(83)); 
console.log(verificarNumeroPrimo(100)); 
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907)); 


function transporMatriz(A) {
    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
    
    console.log("Matriz Original:");
    console.table(A);
    
    console.log("Matriz Transposta:");
    console.table(transposta);
}


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
