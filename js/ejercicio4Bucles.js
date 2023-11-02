let valor = 0;
let sumaTotal = 0;
do{
    valor = parseInt(prompt("Ingrese un valor: "));
    if(Number.isInteger(valor)){
        sumaTotal = sumaTotal + valor;
    }else{
        alert("El valor ingresado no es un numero!!");
    }
}while(confirm("Desea seguir ingresando numeros?"));

document.write(`<h2 class="text-center text-primary">La suma total de los valores ingresados es: ${sumaTotal}</h2>`);