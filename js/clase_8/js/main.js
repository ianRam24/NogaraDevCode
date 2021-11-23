function user() {
  var nombre = prompt('Cual es tu nombre');
  var lenguaje = prompt('Que lenguaje de programacion te gusta mas');
  bienvenida(nombre);
}

function bienvenida(funcionBienvenida, lenguaje = 'python') {
  document.write('Bienvenido ' + funcionBienvenida + ' a mi pagina');
  document.write(lenguaje);
  function perfil() {
    document.getElementsByTagName('body')[0].innerText = '';
    document.write('User: ' + funcionBienvenida + '<br>');
    document.write('Lenguaje: ' + lenguaje);
  }
  setTimeout(function () {
    perfil();
  }, 2000);
  perfil();
}
// user();

function suma(num1, num2) {
  return num1 + num2;
  //   console.log(total);
  //   return total;
}

// var nombre = prompt('Cual es tu nombre');
// var perro = suma(4, 5);

function mensaje(nombre) {
  return 'Hola ' + nombre + ' Feliz dia';
}
// var persona1 = mensaje('Pedro');
console.log(mensaje('Richard'));
