const edad = parseInt(prompt("Ingrese su edad: "));
if(Number.isInteger(edad)){
    if(edad >= 18){
        document.write('<h2 class="text-center text-success">Tiene permiso para conducir!!!</h2>')
    }else{
        document.write('<h2 class="text-center text-danger">Usted no tiene permiso para conducir</h2>')
    }
}else{
    document.write('<h2 class="text-center text-danger">El valor ingresado no es una edad</h2>');
}