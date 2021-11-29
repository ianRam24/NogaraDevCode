var screenCal = '0';
var total = 0;

function clearScreen() {
  screenCal = 0; // Variable
  updateScreen();
  // document.getElementById('screen').innerText = '0'; //Limpia lo que se ve en la pantalla
}

function updateScreen() {
  document.getElementById('screen').innerText = screenCal;
}
function deleteLastNumber() {
  if (screenCal.length == 1) {
    clearScreen();
  } else {
    screenCal = screenCal.slice(0, -1);
    updateScreen();
  }
}

function displayNumber(number) {
  if (screenCal == 0) {
    document.getElementById('screen').innerText = number;
    screenCal = number;
  } else {
    screenCal = screenCal + number;
    updateScreen();
  }
}

function operacion() {
  var number1 = 0;
  var number1 = parseInt(screenCal);
  if (total == 0) {
    total = number1;
    clearScreen();
  } else {
    total = total + number1;
    document.getElementById('screen').innerText = total;
    screenCal = 0;
    number1 = 0;
    // console.log(total);
    switch (operacion) {
      case substraction:
        total = total - number1;
        screenCal = 0;
        number1 = 0;
        break;
      case multiplication:
        total = total * number1;
        screenCal = 0;
        number1 = 0;
        break;
      case division:
        total = total / number1;
        screenCal = 0;
        number1 = 0;
        break;

      default:
        break;
    }
  }
}
