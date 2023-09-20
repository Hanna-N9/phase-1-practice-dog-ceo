console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const li = document.createElement("li");

  /////////////////////////////////////////////////////Challenge One ///////////////////////////////////////////////////////////

  //fetches the images using the url above - imgURL
  //Adds image elements to the DOM for each 🤔 image in the array --- message is an
  const fetchImages = () => {
    fetch(imgUrl)
      .then(res => res.json())
      .then(imgs => imgs.message.forEach(img => addImgs(img))) //{ "message": [], "status": "success"}
      .catch(err => alert(err));
  };
  fetchImages();

  //Adds image elements to the DOM
  const addImgs = image => {
    const container = document.querySelector("div#dog-image-container");
    const createImg = document.createElement("img");
    createImg.src = image;
    container.appendChild(createImg);
  };

  ////////////////////////////////////////////Challenge Two, Three (color) ///////////////////////////////////////////////////////////

  //fetches all the dog breeds using the url above - breedUrl
  //Object and not array so don't use forEach, to use forEach is in new function - BreedList
  const fetchDogBreeds = () => {
    fetch(breedUrl)
      .then(res => res.json())
      .then(breeds => {
        const breedsObject = Object.keys(breeds.message); //{"message": {}, "status": "success"}
        BreedList(breedsObject);
      })
      .catch(err => alert(err));
  };
  fetchDogBreeds();

  //to get each list
  const BreedList = breeds => {
    breeds.forEach(breed => addBreedList(breed));
  };

  //adds the breeds to the page in the <ul> provided in index.html
  ////add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
  const addBreedList = breed => {
    let ul = document.querySelector("ul#dog-breeds");
    let li = document.createElement("li");
    li.textContent = breed;
    ul.appendChild(li);
    li.addEventListener("click", e => {
      e.target.style.color = "green";
    });
  };
});
