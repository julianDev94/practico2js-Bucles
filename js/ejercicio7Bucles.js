do {
  let piramideInversa = parseInt(
    prompt("Ingrese un valor para armar la piramide inversa: ")
  );
  if (Number.isInteger(piramideInversa)) {
    if (piramideInversa >= 1 && piramideInversa <= 50) {
      for (let i = piramideInversa; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
          document.write(i);
        }
        document.write("<br>");
      }
    } else {
      alert("Porfavor ingrese un valor entre 1 y 50");
    }
  } else {
    alert("El valor ingresado no es numero");
  }
} while (confirm("Desea seguir ingresando valores?"));
