var gato = true;
var pajaro = false;
if (gato == true) {
  console.log('Tiene 4 patas');
}
if (gato == true) {
} else {
  console.log('No es un gato');
}
var nombre = prompt('Como te llamas');
var salario = prompt('Cuanto ganas');

if (salario > 50) {
  alert(nombre + ' ' + 'puedes comprar picafresas');
} else {
  alert(nombre + ' ' + 'no te alcanza para picafresas');
}

// >= Mayor o igual
// || Pleca

var dinero = prompt('Cuanto dinero tienes');
if (dinero > 100) {
  console.log('Te alcanza para 10 panes de muerto');
} else if (dinero >= 90) {
  console.log('Te alcanza para 9 panes de muerto');
} else if (dinero >= 80) {
  console.log('Te alcanza para 8 panes de muerto');
} else if (dinero >= 70) {
  console.log('Te alcanza para 7 panes de muerto');
} else {
  console.log('No te alcanza regresa cuando tengas dinero');
}
var perro = prompt('Cuanto dinero tienes?');

if (perro != 0) {
  console.log('Si tienes pero');
}
var estudiante = 'Sebas';
var titulo = false;
var experiencia = true;
var edad = 23;

if (titulo && experiencia && edad > 18) {
  console.log('Puedes conseguir trabajo');
} else {
  console.log('No puedes conseguir trabajo');
}

// && y
// || o
