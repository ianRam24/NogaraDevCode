// document.getElementsByTagName('button')[0].addEventListener('click', function(){
//   console.log('Ejecutando funcion anonima');
// });    //FUNCION ANONIMA
// document.getElementsByTagName('button')[0].onclick = function(){console.log('Funcion declarada en la misma linea');}

/* Forma antigua para validar si agrego clase o se quita una clase */
// if (event.target.classList == 'btn-black') {
//   event.target.classList.remove('btn-black');
// } else {
//   event.target.classList.add('btn-black');
// }

document.getElementsByTagName('button')[0].addEventListener('click', mensaje);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mousedown', mouseDown2);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mouseenter', cursorEnter);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mouseover', cursorHover);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mouseout', cursorOut);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mouseleave', cursorLeave);
document
  .getElementsByTagName('button')[0]
  .addEventListener('mousemove', cursorMove);
function mensaje(event) {
  event.target.classList.toggle('btn-black');
  console.log(event.target);
}

function mouseDown2() {
  console.log('mousedown');
}
function mouseDown2() {
  console.log('mousedown');
}
function cursorEnter() {
  console.log('mouseenter');
}
function cursorHover() {
  console.log('mouseover');
}
function cursorOut() {
  console.log('mouseout');
}
function cursorLeave() {
  console.log('mouseleave');
}
function cursorMove() {
  console.log('mousemove');
}
// document.getElementsByTagName('button')[0].addEventListener('contextmenu', menuSec);

// function menuSec(event) {
//   document.getElementsByName('div')[0].style.display = 'block'
//   console.log('MenuSecundario');
// }
document.getElementsByTagName('body')[0].oncontextmenu = function () {
  return false;
};
