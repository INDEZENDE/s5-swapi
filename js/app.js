var sectionPeople = document.getElementById('site-container');

fetch("https://swapi.co/api/films/")
    .then(response = response => {
        return response.json();
    })
    .then(titles = data => {
      // Contiene los títulos
      let containerGallery= document.getElementById('site-container');
      let output = ' ';
      let count =1;
      data.results.forEach(moviesDetails = element =>{
        output +=
        ` <img src="assets/images/e${count++}${".jpg"}">
          <br>
          <h4 class = "${"card-title"}">${"Name"}</h4>
          <p class = "${"card-text"}">${element.title}</p>
          <br>
          <h4 class = "${"card-title"}">${"Episodes"}</h4>
          <p class = "${"card-text"}">${element.episode_id}</p>
          <br>
          <h4 class = "${"card-title"}">${"Characters"}</h4>
          <br>`
          element.characters.forEach(function(element1){
            output +=//Guarda las características de cada personaje
            `<p class = "${"card-text"}" data-toggle="${"modal"}" data-target="${"#modalCharacters"}" data-whatever="${"@mdo"}">${element1} </p>
            <br>`
            containerGallery.innerHTML = output;
            // console.log(element1);

            $.ajax({//Segunda petición
              url: element1
          }).done(gettingCharacters);

          // Inicia la función para obtener el segundo request

          function gettingCharacters (element){//Función que depende de la segunda petición

            console.log(element.name);
            console.log(element.height);
            console.log(element.mass);
            console.log(element.hair_color);
            console.log(element.skin_color);
          }

          })
        containerGallery.innerHTML = output;
        });


    })
    .catch(function (error) {
        console.log('Request failed', error)
    });
