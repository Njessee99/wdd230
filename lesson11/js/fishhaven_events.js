const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    const myTowns = towns.filter(
      (town) =>
        town.name === "Fish Haven"
    );

    myTowns.forEach((myTowns) => {
      let card = document.createElement("section");
      let events = document.createElement("div");
      let event1 = document.createElement("p");
      let event2 = document.createElement("p");
      let event3 = document.createElement("p");
      let event4 = document.createElement("p");


      event1.innerHTML = ` ${myTowns.events[0]}`;
      event2.innerHTML = ` ${myTowns.events[1]}`;
      event3.innerHTML = ` ${myTowns.events[2]}`;
      event4.innerHTML = ` ${myTowns.events[3]}`;
      card.className = "eventsCard";
      events.className = "eventsBox";
      card.appendChild(events);
      events.appendChild(event1);
      events.appendChild(event2);
      events.appendChild(event3);
      events.appendChild(event4);
      document.querySelector("div.events").appendChild(card);
    });
  });