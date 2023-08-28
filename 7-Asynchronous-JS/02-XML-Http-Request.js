const getStarWarsCharacter = function () {
  const request = new XMLHttpRequest();

  // 83 characters
  request.open("GET", `https://swapi.dev/api/people/${Math.floor(Math.random() * 83) + 1}`);
  request.send();

  request.addEventListener("load", function () {
    const character = JSON.parse(this.responseText);
    console.log(character.name);
  });
};

getStarWarsCharacter();
