//  var loQueSea = 30;
//   Switch case
//  switch (loQueSea) {
//    case 30:
//      console.log('hee hee');
//      break;

//    case 40:
//      console.log(40);
//      break;

//    default:
//      console.log('default');
//  }

//  if (loQueSea == 30) {
//    console.log('hee hee');
//  } else if (loQueSea == 40) {
//    console.log(40);
//  } else {
//    console.log('default');
//  }

// /*Template Strings*/
//  var img = '<img src="img.png" alt="">';
//  for (let index = 0; index < 10; index++) {
//    document.write(img);
//  }

//  for (let index = 1; index <= 10; index++) {
//    document.write('<h2>' + index + 'x' + tabla + '=' + index * tabla + '</h2>');
//  }
//  var tabla = 1;
//  for (let index2 = 1; index2 <= 10; index2++) {
//    for (let index = 1; index <= 10; index++) {
//      document.write(
//        '<h2>' + index2 + index + 'x' + tabla + '=' + index * tabla + '</h2>'
//      );
//    }
//  }
/* Bucle normal */
//  for (let index = 1; index <= 5; index++) {
//    document.write('<h2>' + index + '</h2>');
//  }

/* Ejercicio */

//  var tabla = 1;
//  for (let index = 1; index <= 10; index++) {
//    document.write(
//      '<h2>' + tabla + ' x ' + index + ' = ' + index * tabla + '</h2>'
//    );
//  }

/* Bucles Anidados */

// for (let index2 = 1; index2 <= 10; index2++) {
//   for (let index = 1; index <= 10; index++) {
//     document.write(
//       '<h2>' + index2 + ' x ' + index + ' = ' + index * index2 + '</h2>'
//      );
//    }
//  }

/* Ejercicio */
var num = prompt('De cuantos escalones va a ser la pirmide');

// for (let index2 = 1; index2 <= escalonesPiramide; index2++) {
//   escalonesPiramide * escalonesPiramide;
//   for (let index = 1; index <= escalonesPiramide * 2; index++) {
//     document.write('<h2>' + '😁' + '</h2>');
//   }
// }
// for (let index = 1; index <= escalonesPiramide; index++) {
//   var resultado = '';
//   for (let index2 = 0; index2 < index; index2++) {
//     resultado += '😁 ';
//   }
//   document.write(resultado);
// }
// *
// **
// ***
// ****
// *****

for (let index2 = 1; index2 <= num; index2++) {
  for (let index = 1; index <= index2; index++) {
    document.write('😁');
  }
  document.write('<br>');
}
