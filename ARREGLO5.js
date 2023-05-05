var edad = [];
var nombre = [];
var i = 0;
do {
    console.log("PROGRAMA DE EDADES");
    console.log("1. IR A DIGITAR LAS EDADES");
    console.log("2. SALIR");
    var opcion = parseInt(prompt("DIGITE UNA OPCION"));
    if (opcion == 1) {
        while (i <= edad.length) {
            nombre[i] = prompt("DIGITE EL NOMBRE DEL ESTUDIANTE");
            if (nombre[i] != "*") {
                edad[i] = parseInt(prompt("DIGITE LA EDAD DEL ESTUDIANTE " + nombre[i]));
                console.log("Estudiante: " + nombre[i] + " tiene ->" + edad[i]);
            } else {
                console.log("SE CERRO LA DIGITACION ");
                console.log("\n MOSTRANDO RESULTADOS");
                i = 100000;
            }
            i++;
        }
        console.log("ESTUDIANTES MAYORES EDAD");
        var l=0;
        for(l;l<=edad.length;l++){
            if (edad[l] >= 18) {
                console.log("Estudiante: " + nombre[l] + " tiene ->" + edad[l]);
            }
        }
        console.log("ESTUDIANTES ORDENADOS DE MAYOR A MENOR");
        for (let j = 0; j < edad.length; j++) {
            for (let k = 0; k < edad.length; k++) {
                if (edad[k] < edad[j]) {
                    var numeroanterior = edad[j];
                    var numeromenor = edad[k];
                    edad[j] = numeromenor;
                    edad[k] = numeroanterior;
                }
            }
        }
        console.log(edad);
    } else if (opcion == 2) {
        console.log("finalizo el programa");
    } else {
        console.log("las opcion registrada no es valida");
    }
} while (opcion != 2)