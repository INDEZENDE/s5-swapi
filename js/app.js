var url= "https://swapi.co/api/films/"
fetch(`${url}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { //Contiene el json de la consulta
        // console.log('Request successful');
        let results = data.results;
        // console.log(results);//Contiene el arreglo de objetos con las 7 películas
        printFilms(results); //Función que pinta los resultados de las películas
    })
    .catch(function (error) {
        console.log('Request failed', error)
    });

// Función que pinta películas

let printFilms =results => {
  let containerGallery= document.getElementById('site-container');
  let output = ' ';
  let count =1;
  // Pinta las películas
  results.forEach(moviesDetails = element =>{
    output += //Guarda las características de cada película
    ` <img class = "${"films-img"}" src="assets/images/e${count++}${".jpg"}">
      <br>
      <h4 class = "${"card-title"}">${"Name"}</h4>
      <p class = "${"card-text"}">${element.title}</p>
      <br>
      <h4 class = "${"card-title"}">${"Episodes"}</h4>
      <p class = "${"card-text"}">${element.episode_id}</p>
      <br>
      <h4 class = "${"card-title"}">${"Characters"}</h4>
      <br>`
      //Pina los personajes
      element.characters.forEach(function(element1){
        output +=//Guarda las características de cada personaje
        `<p class = "${"card-text"}" data-toggle="${"modal"}" data-target="${"#modalCharacters"}" data-whatever="${"@mdo"}">${element1} </p>
        <br>`
        gettingCharacters (element1)
        });
        });
        containerGallery.innerHTML = output;
}
//Inicia la seggunda petición
let gettingCharacters = characters => {

  fetch(`${characters}`)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) { //Contiene el json de la consulta
          // console.log('Request successful');
          let results = data;
          // console.log(results);//Contiene el arreglo de objetos con las 7 películas
          printFilms(results); //Función que pinta los resultados de las películas
      })
      .catch(function (error) {
          console.log('Request failed', error)
      });


}
