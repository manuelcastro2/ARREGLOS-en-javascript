var matriz = new Array(5);
for (let fila = 0; fila < matriz.length; fila++) {
    matriz[fila] = new Array(5);
    for (let columna = 0; columna < matriz[fila].length; columna++) { 
            matriz[fila][columna] = Math.floor(Math.random()*100);
    }
}
console.log(matriz);