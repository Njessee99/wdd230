const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=24.48&lon=55.35&exclude=hourly,minutely&appid=1925537df249e2feeb9c942f8dcf140e&units=metric";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let current = document.createElement("div");
    let heading = document.createElement("h3");
    let currentIcon = document.createElement("img");
    let currentTemp = document.createElement("p");
    let condition = document.createElement("p");
    let humidity = document.createElement("p");

    current.className = "currentWeather";
    heading.textContent = `Currently`;
    currentIcon.setAttribute(
      "src",
      `images/${jsObject.current.weather[0].icon}.png`
    );
    currentIcon.setAttribute(
      "alt",
      `Icon showing ${jsObject.current.weather[0].description}`
    );
    condition.innerHTML = `${jsObject.current.weather[0].main}`;
    currentTemp.innerHTML = `${jsObject.current.temp.toFixed(0)}℃`;
    humidity.innerHTML = `${jsObject.current.humidity}% Humidity`;

    current.appendChild(heading);
    current.appendChild(currentIcon);
    current.appendChild(condition);
    current.appendChild(currentTemp);
    current.appendChild(humidity);
    document.querySelector("section.weather").appendChild(current);

    let threedays = document.createElement("div");
    let castHeading = document.createElement("h3");
    threedays.className = "forecast";
    castHeading.innerHTML = `Three Day Forecast`;
    threedays.appendChild(castHeading);
    document.querySelector("section.weather").appendChild(threedays);

    for (i = 0; i < 3; i++) {
      let forecast = document.createElement("div");
      let label = document.createElement("div");
      let castIcon = document.createElement("img");
      let castTemp = document.createElement("div");
      let dayName = new Date(jsObject.daily[i].dt * 1000).toLocaleString(
        "en-us",
        {
          weekday: "short",
        }
      );
      forecast.className = "castInfo";
      label.innerHTML = `${dayName}`;
      castIcon.setAttribute(
        "src",
        `images/${jsObject.daily[i].weather[0].icon}.png`
      );
      castIcon.setAttribute(
        "alt",
        `Icon showing ${jsObject.daily[i].weather[0].description}`
      );

      castTemp.innerHTML = `${jsObject.daily[i].temp.day.toFixed(0)}℃`;
      threedays.appendChild(forecast);
      forecast.appendChild(label);
      forecast.appendChild(castIcon);
      forecast.appendChild(castTemp);
      document.querySelector("section.weather").appendChild(threedays);
    }
    if (jsObject.alerts) {
        alert(`${jsObject.alerts.sender_name} says ${jsObject.alerts.description}`);
    }
  });
