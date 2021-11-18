// var element = document.getElementsByTagName('p')[1];
// console.log(element);

// var element = document.getElementsByClassName('animales')[2];
// console.log(element);
// var element = document.getElementById('perro');

// InnerTEXT:solo pasa el texto
// InnerHtml:trae texto con todo y etiquetas
// Siempre que queramos usar una funcion es con parentesis'()'
document.getElementsByTagName('body')[0].innerHTML =
  '<main></main> <footer></footer>';
var elemen1 = '<p class="animales">Gato</p>';
var element2 = '<p class="animales" id="perro">Perro</p>';
var element3 = '<div class="animales" onclick="cambiarTexto()">Click</div>';
document.getElementsByTagName('main')[0].innerHTML =
  elemen1 + element2 + element3;
// document.getElementsByTagName('body')[0].innerHTML = '<footer></footer>';

const open = document.getElementById('open');
const container = document.getElementById('container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  container.classList.add('show-modal');
});

close.addEventListener('click', () => {
  container.classList.remove('show-modal');
});
function mostrarUocultarModal() {}
if (showModal == true) {
  container.classList.add('show-modal');
} else {
  container.classList.remove('show-');
}
