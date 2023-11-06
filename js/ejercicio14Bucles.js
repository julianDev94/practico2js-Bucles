let cadena = prompt("Ingrese el texto: ");
let cadenaFormateada = "";
for(let i = 0; i < cadena.length ; i++){
    if(cadena[i] != ' '){
        cadenaFormateada = cadenaFormateada + cadena[i] + '-';
    }
}
cadenaFormateada = cadenaFormateada.slice(0,-1);
console.log(cadenaFormateada);

