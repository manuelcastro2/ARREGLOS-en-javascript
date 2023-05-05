let elementos=[];
for (let i = 0; i <=elementos.length;i++) {
 let enteros=parseInt(prompt("digite numeros"))
 if(enteros>=0){
    elementos[i]=enteros;
 }else{
    i=1000000;
 }
}
console.log(elementos);