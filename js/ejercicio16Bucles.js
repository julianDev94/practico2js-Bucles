let cadena = prompt("Ingrese la cadena de texto que desee: ");
let cadenaNueva = '';

for(let i = cadena.length - 1; i>=0 ; i--){
    cadenaNueva = cadenaNueva + cadena[i];
}

document.write(`<h2 class="text-center text-success">${cadenaNueva}</h2>`);