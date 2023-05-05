var matriz = new Array(5);
var suma = 0;
var suma2 = 0;
for (let fila = 0; fila < matriz.length; fila++) {
    matriz[fila] = new Array(5);
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        matriz[fila][columna] = Math.floor(Math.random() * 100);
    }
}
console.log(matriz);
console.log("todas las columnas suamdas: ");
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        suma = suma + matriz[fila][columna];
    }
    console.log(suma);
}
console.log("todas las filas suamdas: ");
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        suma2 = suma2 + matriz[columna][fila];
    }
    console.log(suma2);
}