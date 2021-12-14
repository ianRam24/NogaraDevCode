/* mensaje();     Esto es antes de Ecma 6  
function mensaje() {
  document.write('hola bienvenido');
} */

/* const saludo = function (nombre) {
  document.write(nombre);
};

const bienvenida = (nombre) => {
  document.write('Hola Bienvenido');
};
bienvenida('Pedro');
 */
const bienvenida = (nombre) => document.write(nombre);
bienvenida('Pablo');

