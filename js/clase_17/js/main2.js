// Local Storage
// Sirve para guardar los datos sin inportar que se haya refrescado el navegador
// const frutas = {
//     item1: 'naranja',
//     item2: 'platano',
//     item3: 'manzana'
// };

// const frutasJson = JSON.stringify(frutas);

// const frutas2 = '{"item1":"naranja","item2":"platano","item3":"manzana"}';

// const frutasArray = JSON.parse(frutas2);

// console.log(frutas);
// console.log(frutasJson);
// console.log(frutas2);
// console.log(frutasArray);

// document.write(frutasArray[1]);
localStorage.setItem('name', 'Ian');
const name = localStorage.getItem('name');

const meses = ['Febrero', 'Abril', 'Agosto'];
localStorage.setItem('meses', JSON.stringify(meses));

document.write(name);
document.write(meses);

// Session Storage
// A diferencia del Local el Session se elimina al cerrar el navegador
sessionStorage.setItem('batman', 'Bruce');
const heroe = sessionStorage.getItem('batman');
// const div = document.createElement('div');
// div.textContent = heroe;
