let valorPiramide = parseInt(
  prompt("Ingrese un valor para armar la piramide: ")
);
if (valorPiramide >= 1 && valorPiramide <= 50) {
  for (let i = 1; i <= valorPiramide; i++) {
    for (let j = 0; j < i; j++) {
        
        document.write('1' + i);
    }
    document.write("<br>");
  }
}
