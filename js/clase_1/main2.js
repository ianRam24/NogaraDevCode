// Con un '=' es asignacion y con '==' doble igual quiere decir que es igual
// '>' Mayor que   '<' Menor que

var dato1 = '15';
var dato2 = 15;
/*Operadores de Comparacion */
// dato1 == dato2;
// dato1 > dato2;
// dato1 < dato2;
// dos == solo compara si son iguales y tres === compara si son el mismo tipo de dato y si son el mismo numero
// Se recomienda ocupar siempre 3 signos de igual

/* Condicionales */
// La condicion siempre va dentro de los '( )'
if (dato1 > dato2) {
  console.log('Bienvenido');
}
if (dato1 < dato2) {
  console.log('Bienvenido');
}
if ((dato1 = dato2)) {
  console.log('Bienvenido');
}

if (dato1 === dato2) {
  console.log('Bienvenido');
}

var nombre = prompt('Cual es tu nombre');

// Crear un algoritmo que le pida al usuario su nombre y su edad y si es mayor de edad te dara un mensaje con un alert
// El alert va a decir 'Bienvenido Pedro si pudiste entrar porque tienes 25'

var edad = prompt('Cuantos años tienes');
var nombre = prompt('Cual es tu nombre');

if (edad > 18) {
  alert(`Pudiste entrar ${nombre} porque tienes ${edad}`);
} else {
  alert('No entras eres muy joven');
}
