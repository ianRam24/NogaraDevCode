let wWindow = window.innerWidth;
let hWindow = window.innerHeight;

const btn = document.getElementById('pop-up');
function geoLocalitation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('No esta soportado por el navegador');
  }
  console.log('You have been hacked');
}

function showPosition(position) {
  console.log(position);
}
btn.addEventListener('click', geoLocalitation());

/* screen.orientation.type=> para saber la orientacion del telefono: landscape-primary: Horizontal y portrait-primary: Vertical */
// screen.width => Saca el Ancho de laa pantalla
// screen.height=> Saca el alto de la pantalla
// 19.5584975 / -99.1440035 Location
