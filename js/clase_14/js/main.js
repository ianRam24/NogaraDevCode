'use strict';
// For of: no sirve para iterar en objetos
// For in si podemos iterar sobre objetos
// for (const iterator of object=>Aqui va el String o el Array) {

// }
/* const frutas = ['Naranja', 'Pera', 'Manzana', 'Guayaba', 'Mandarina'];
const nombre = 'Pablo Picaso';
const frutas2 = {
  name1: 'Pablo',
  name2: 'Pedro',
  name3: 'Paco',
  name4: 'Hugo',
  name5: 'Luis',
};
for (const iterator of frutas) {
  console.log(iterator);
}
 */
// for (const key in object=> aqui va el nombre de la variable del objeto) {
// }
// for (const key in frutas2) {
//   console.log(frutas2[key]);
// }
const obtenerUsuario = (event) => {
  event.preventDefault();
  let user = document.getElementById('nombre').value;
  //   console.log(user);
  return user;
  //   console.log(event);
};

const getUserData = (event) => {
  event.preventDefault();
  let userName = obtenerUsuario();
  console.log(userName);
};
// const initApp = () => {
// };
const enviar = document.getElementById('enviar');
enviar.addEventListener('click', obtenerUsuario);
