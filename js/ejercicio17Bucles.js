let pos = 0;
let vocal = '';
let cadena = prompt("Ingrese la cadena de texto que desee: ");
cadena = cadena.toLocaleLowerCase();

for(let i = 0 ; i < cadena.length ; i++){
    if(cadena.charAt(i) == 'a' || cadena.charAt(i) == 'e' || cadena.charAt(i) == 'i' || cadena.charAt(i) == 'o' || cadena.charAt(i) == 'u' ){
        vocal = vocal + cadena.charAt(i);
        pos = cadena.indexOf(cadena.charAt(i));
        break;
    }
}

document.write(`<h2 class="text-center text-primary">La vocal ${vocal} se encuentra en la posicion ${pos}</h2>`);
