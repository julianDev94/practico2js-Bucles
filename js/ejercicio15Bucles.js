let contadorVocales = 0;
let cadena = prompt("Ingrese la cadena de texto que desee: ");
cadena = cadena.toLocaleLowerCase();

for(let i = 0; i<cadena.length; i++){
    if(cadena.charAt(i) == 'a' || cadena.charAt(i) == 'e' || cadena.charAt(i) == 'i' || cadena.charAt(i) == 'o' || cadena.charAt(i) == 'u' ){
        contadorVocales++;
    }
}

document.write(`<h2 class="text-center text-success">La cantidad de vocales del texto ingresado es: ${contadorVocales}</h2>`);