const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const myTowns = towns.filter((town) => town.name === "Soda Springs");

    myTowns.forEach((myTowns) => {
      let card = document.createElement("section");
      let events = document.createElement("div");
      for (i = 0; i < myTowns.events.length; i++) {
        let event1 = document.createElement("p");

        event1.innerHTML = ` ${myTowns.events[i]}`;
        card.className = "eventsCard";
        events.className = "eventsBox";
        card.appendChild(events);
        events.appendChild(event1);
        document.querySelector("div.events").appendChild(card);
      }
    });
  });
