var sectionPeople = document.getElementById('site-container');
// var modal = document.getElementById('exampleModal');

fetch("https://swapi.co/api/films/")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      // Contiene los títulos
      let containerGallery= document.getElementById('site-container');
      let output = ' ';

      data.results.forEach(function(element) {
        output +=

        `<h4 class = "${"card-title"}">${"Name"}</h4>
          <p class = "${"card-text"}">${element.title}</p>
          <br>
          <h4 class = "${"card-title"}">${"Episodes"}</h4>
          <p class = "${"card-text"}">${element.episode_id}</p>
          <br>
          <h4 class = "${"card-title"}">${"Characters"}</h4>

          <br>`
          let output2 = ' ';
          element.characters.forEach(function(element1){
            output +=
            `<p class = "${"card-text"}">${element1}</p>
            <br>`
            containerGallery.innerHTML = output2;
            console.log(typeof(element.characters.element1));
          })
        containerGallery.innerHTML = output;
        //

        });


    })
    .catch(function (error) {
        console.log('Request failed', error)
    });
