var matriz = new Array(5);
for (let fila = 0; fila < matriz.length; fila++) {
    matriz[fila] = new Array(5);
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        if (fila==columna) {
            matriz[fila][columna] = 1;
        } else {
            matriz[fila][columna] = 0;
        }


    }
}
console.log(matriz);