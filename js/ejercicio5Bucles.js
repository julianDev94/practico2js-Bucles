do {
  let dni = parseInt(prompt("Ingrese dni para conocer su letra: "));
  if (Number.isInteger(dni)) {
    if (dni >= 0 && dni <= 99999999) {
      switch (dni % 23) {
        case 0:
          alert("El documento le corresponde la letra T");
          break;
        case 1:
          alert("Le corresponde la letra R");
          break;
        case 2:
          alert("Le corresponde la letra W");
          break;
        case 3:
          alert("Le corresponde la letra A");
          break;
        case 4:
          alert("Le corresponde la letra G");
          break;
        case 5:
          alert("Le corresponde la letra M");
          break;
        case 6:
          alert("Le corresponde la letra Y");
          break;
        case 7:
          alert("Le corresponde la letra F");
          break;
        case 8:
          alert("Le corresponde la letra P");
          break;
        case 9:
          alert("Le corresponde la letra D");
          break;
        case 10:
          alert("Le corresponde la letra X");
          break;
        case 11:
          alert("Le corresponde la letra B");
          break;
        case 12:
          alert("Le corresponde la letra N");
          break;
        case 13:
          alert("Le corresponde la letra J");
          break;
        case 14:
          alert("Le corresponde la letra Z");
          break;
        case 15:
          alert("Le corresponde la letra S");
          break;
        case 16:
          alert("Le corresponde la letra Q");
          break;
        case 17:
          alert("Le corresponde la letra V");
          break;
        case 18:
          alert("Le corresponde la letra H");
          break;
        case 19:
          alert("Le corresponde la letra L");
          break;
        case 20:
          alert("Le corresponde la letra C");
          break;
        case 21:
          alert("Le corresponde la letra K");
          break;
        case 22:
          alert("Le corresponde la letra E");
          break;
        default:
          alert("No le corresponde ninguna letra al dni ingresado");
          break;
      }
    }
  } else {
    alert("El valor ingresado no es un numero!");
  }
} while (confirm("Desea seguir ingresando dni para conocer su letra?"));
