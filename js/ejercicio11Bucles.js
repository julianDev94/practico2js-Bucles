let nombre = [];
let edad = [];

for(let i = 0; i < 3; i++){
    nombre.push(prompt("Ingrese nombre: "));
    edad.push(parseInt(prompt("Ingrese la edad: ")));
}

let pos = edad.indexOf(Math.max(...edad));
alert(`El nombre de la persona con mayor edad es: ${nombre[pos]}`);
