var vector1=[];
var vector2=[];
var vector3=[];

for (let i = 0; i < 5; i++) {
    vector1[i]=parseInt(prompt("DIGITE NUMEROS ENTEROS DEL ARRAY 1 :"+i));
}
for (let i = 0; i < 5; i++) {
    vector2[i]=parseInt(prompt("DIGITE NUMEROS ENTEROS DEL ARRAY 2 :"+i));
}
console.log("la sumatoria es");
for (let i = 0; i < 5; i++) {
   vector3[i]=(vector1[i]+vector2[i]);
console.log(i+". "+vector3[i]);
}
