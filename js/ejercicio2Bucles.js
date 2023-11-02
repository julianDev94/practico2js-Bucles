const nota = parseInt(prompt("Ingrese la nota para conocer su calificación: "));
if(nota >= 0 && nota <= 10){
    if(nota >= 0 && nota <=2){
        alert("Muy deficiente");
    }
    if(nota >= 3 && nota <= 4){
        alert("Insuficiente");
    }
    if(nota >= 5 && nota <= 6){
        alert("Suficiente");
    }
    if(nota == 7){
        alert("Bien");
    }
    if(nota >= 8 && nota <= 9){
        alert("Notable");
    }
    if(nota == 10){
        alert("Sobresaliente");
    }
}else{
    alert("Valor ingresado no valido como nota");
}