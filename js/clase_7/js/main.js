// Objetos con {} llaves
// Array con [] corchetes
/* var animal = {
  tipo: 'perro',
  nombre: 'Pugberto',
  edad: 7,
  medicamentos: [
    'Paracetamol',
    'Desparacitante',
    'Cafi aspirina',
    {
      alergias: [['perro'], ['gato'], ['perico']],
    },
  ],
}; */
// var animal2 = ['perro 2', 'pugberto 2']; Array
//Para aceder a un array simpre poner los corchetes
// Para accedet a un objeto se pone con un punto
/* 
var facebook = {
  amigos: [{ name: 'Chente' }],
  fotos: [
    {
      descripcion: 'lotrm dsfdgfdgfgjmhgm',
      tamaño: '300 x 500',
      comentarios: [{ persona: 'brayan', coment: 'dsdfsdfdsgdvgdf' }],
    },
  ],
  estadoCivil: true,
}; */
/************* ***************            Funciones           **************************/
var marginTop = 0;
var marginLeft = 0;
var velocidad = 10;
function movimiento(flecha) {
  var pikachu = document.getElementById('pikachu');
  // marginTop = marginTop + velocidad;

  switch (flecha) {
    case 'arriba':
      marginTop = marginTop - velocidad;
      pikachu.style.marginTop = marginTop + 'px';
      console.log('arriba');
      break;
    case 'abajo':
      marginTop += velocidad;
      pikachu.style.marginTop = marginTop + 'px';
      console.log('abajo');
      break;
    case 'izquierda':
      marginLeft -= velocidad;
      pikachu.style.marginLeft = marginLeft + 'px';
      console.log('izq');
      break;
    case 'derecha':
      marginLeft += velocidad;
      pikachu.style.marginLeft = marginLeft + 'px';
      console.log('derecha');

    default:
      break;
  }
  marginTop += velocidad;
}
movimiento();
// La funcion se ejecuta poniendo el nombre de la fucion y con parentesis
// Dentro de las llaves siempre se pone lo que se va a ejecutar
