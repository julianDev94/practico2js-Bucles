// let arrayCadena = [];
let cadenaCompleta = '';
let cadena = '';
do{
    cadena = prompt("Ingrese una cadena:");
    cadena = cadena + '-';
    cadenaCompleta = cadenaCompleta + cadena;
}while(confirm("Desea seguir agregando palabras?"));

document.write(`<h2 class="text-center text-primary">${cadenaCompleta}</h2>`)

