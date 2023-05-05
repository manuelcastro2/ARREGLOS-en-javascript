var notas = [];
var acumulador = 0;
console.log("notas de estudiante");
for (let index = 0; index < 5; index++) {
    var nota = parseInt(prompt("DIGITE LAS NOTAS" + (index + 1)));
    if (!isNaN(nota)) {
        if(nota>=0 && nota<=10){
            console.log("nota"+index+": "+nota);
        notas[index] = nota;
        acumulador += nota;
        }else{
            console.log("el rango de las notas es de 0 a 10");
            index--;
        }
    } else {
        console.log("no se reciben carateres");
        index--;
    }
}
var media = acumulador / 5;
console.log("\nla media :" + media);
var l = notas[0]
var k = notas[0];
for (let index = 0; index < 5; index++) {
    if (notas[index] > l) {
        l = notas[index];
    }
    if (notas[index] < k) {
        k = notas[index];
    }
}

console.log("\nusando logica de array");
console.log("la nota maxima es: " + l);
console.log("la nota minima es: " + k);
console.log("\nusando metodo max y min");
var m=Math.max.apply(null,notas);
var n=Math.min.apply(null,notas);
console.log("nota maxima: "+m);
console.log("nota minnima: "+n);