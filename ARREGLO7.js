let temperatura = new Array(5);
var media = 0;
var Temperaturamedia = new Array(5);
for (let fila = 0; fila < temperatura.length; fila++) {
    temperatura[fila] = new Array(2);
    for (let columna = 0; columna < temperatura[fila].length; columna++) {
        if (columna % 2 == 0) {
            temperatura[fila][columna] = parseInt(prompt("Ingrese la temperatura maxima del dia " + (fila + 1)));
        } else {
            temperatura[fila][columna] = parseInt(prompt("Ingrese la temperatura minima del dia " + (fila + 1)));
        }
    }
}
console.log(temperatura);
console.log("temperaturas medias");
for (let fila = 0; fila < temperatura.length; fila++) {
    for (let columna = 0; columna < temperatura[fila].length; columna++) {
        media = media + temperatura[fila][columna];
    }
    Temperaturamedia[fila] = media / 2;
    console.log(media / 2);
    media = 0;
}
for (let i = 0; i < Temperaturamedia.length; i++) {
    for (let j = 0; j < Temperaturamedia.length; j++) {
        if (Temperaturamedia[j] > Temperaturamedia[i]) {
            var numeroanterior = Temperaturamedia[i];
            var numeromenor = Temperaturamedia[j];
            Temperaturamedia[i] = numeromenor;
            Temperaturamedia[j] = numeroanterior;
        }
    }
}
console.log("dias desde menos temperatura hasta con mas temeperatura");
console.log(Temperaturamedia);
var teclado = parseInt(prompt("DIGITE UNA TEMPERATRURA"));
for (let fila = 0; fila < temperatura.length; fila++) {
    for (let columna = 0; columna < temperatura[fila].length; columna++) {
        if (teclado == temperatura[fila][columna]) {
            console.log("la temperatura que coincide con la digitada es:");
            console.log(temperatura[fila][columna]);
        }else{
            console.log("aun no coincide la temperatura registrada con la base de datos");
        }
    }
}
