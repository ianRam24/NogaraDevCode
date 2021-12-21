const urlApi = 'https://rickandmortyapi.com/api/character';
fetch(urlApi)
  .then((response) => response.json())
  .then(function (json) {
    const container = document.getElementById('container');
    json.results.map(function (results) {
      container.innerHTML +=
        `
        <div class="card">
      <div> <img src= ` +
        results.image +
        `></div>
      <strong class="card-text">` +
        results.name +
        `</strong><br>
      <span class="card-text">` +
        results.species +
        `</span><br>
      <i class="card-text">` +
        results.status +
        `</i><br>
      <hr>
      </div>
      `;
    });
  });
/*  .then((response) => response.json()) Se convierte en JSON
 .then((data) => console.log(data));  JSON cambia a data y se muestra por consola}*/
