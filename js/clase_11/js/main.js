var anchoDiv = 100;
function pantalla() {
  var widthVentana = window.innerWidth;
  var heightVentana = window.innerHeight;
  anchoDiv++;
  document.getElementsByTagName('div')[0].style.width = anchoDiv + 'px';
  // document.getElementsByTagName('body')[0].innerHTML = heightVentana;
  console.log('tamaño de pantalla es : ' + widthVentana);
}
// window.onresize = pantalla;

var container = document.getElementById('container');
var pieza = document.getElementById('pieza');
container.addEventListener('dragover', allowDrop);
container.addEventListener('drop', drop);
pieza.draggable = true;
pieza.addEventListener('dragstart', drag);

function drop(event) {
  var data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));

  console.log('evento de Drop');
}
function allowDrop(event) {
  event.preventDefault();
  // console.log(event);
}
function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
  console.log(event);
}
