let estudiantes = [];
let nombre = "";
let contador = 0;
let edad = 0;
while (nombre !== "*") {
    estudiantes[contador] = new Array(2);
    for (let i = 0; i < estudiantes[contador].length; i++) {
        if (i === 0) {
            nombre = prompt("ingrese su nombre");
            if (nombre !== "*") {
                estudiantes[contador][i] = nombre;
                console.log(estudiantes[contador][i]);
            } else {
                console.log("Ha finalizado la ejecucion");
                break;
            }
        } else {
            edad = parseInt(prompt("ingrese su edad"));
            estudiantes[contador][i] = edad;
            console.log(estudiantes[contador][i]);
        }
    }
    if (nombre !== "*") {
        contador++;
    } else {
        break;
    }
}

let mayores = []

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i][i]);
    if (estudiantes[i][1] >= 18) {
        mayores.push(estudiantes[i])
    }
}


console.log(estudiantes);
console.log(mayores);

