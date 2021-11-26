const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const myTowns = towns.filter(
      (town) =>
        town.name === "Soda Springs" ||
        town.name === "Preston" ||
        town.name === "Fish Haven"
    );

    myTowns.forEach((myTowns) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let townData = document.createElement("div")
      let yearFounded = document.createElement("p");
      let population = document.createElement("p");
      let rainfall = document.createElement("p");
      let image = document.createElement("img");

      h2.innerHTML = `${myTowns.name}`;
      motto.innerHTML = `<i>${myTowns.motto}</i>`;
      townData.className= ('townData');
      yearFounded.innerHTML = `<b>Year Founded:</b> ${myTowns.yearFounded}`;
      rainfall.innerHTML = `<b>Annual Rain Fall:</b> ${myTowns.averageRainfall}`;
      population.innerHTML = `<b>Population:</b> ${myTowns.currentPopulation}`;
      image.setAttribute("src", `images/${myTowns.photo}`);
      image.setAttribute("alt", `${myTowns.name}`);
      card.appendChild(townData);
      townData.appendChild(h2);
      townData.appendChild(motto);
      townData.appendChild(yearFounded);
      townData.appendChild(population);
      townData.appendChild(rainfall);
      card.appendChild(image);
      document.querySelector("div.townCards").appendChild(card);
    });
  });
