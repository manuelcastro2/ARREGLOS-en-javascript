var numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    numerosAleatorios[i] = Math.floor(Math.random() * 100);
}

console.log(numerosAleatorios);
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (numerosAleatorios[j] > numerosAleatorios[i]) {
            var numeroanterior = numerosAleatorios[i];
            var numeromenor = numerosAleatorios[j];
            numerosAleatorios[i] = numeromenor;
            numerosAleatorios[j] = numeroanterior;
           
        }
    }
}
console.log("ordenamiento de menor a mayor");
console.log(numerosAleatorios);