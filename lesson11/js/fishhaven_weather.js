const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=1925537df249e2feeb9c942f8dcf140e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#temp").innerHTML = `<b>${jsObject.main.temp.toFixed(0)}</b>`;
    document.querySelector("#desc").innerHTML = `<b>${jsObject.weather[0].description}</b>`;
    document.querySelector("#humidity").innerHTML = `<b>${jsObject.main.humidity}</b>`;
    document.querySelector("#windSpd").innerHTML = `<b>${jsObject.wind.speed.toFixed(0)}</b>`;

    const tempF = document.querySelector("#temp").textContent;
    const wind = document.querySelector("#windSpd").textContent;
    let chill = "";
    if (tempF <= 50 && wind > 3) {
      chill = windChill(tempF, wind);
    } else {
      chill = `N/A`;
    }
    function windChill(tempF, wind) {
      let chill =
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * tempF * Math.pow(wind, 0.16);
      return chill.toFixed(0);
    }
    document.querySelector("#wchill").innerHTML = chill;
  });
const castURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=1925537df249e2feeb9c942f8dcf140e&units=imperial";

fetch(castURL)
  .then((response) => response.json())
  .then((jsfObject) => {
    const list = jsfObject["list"];
    const fiveDays = list.filter((list) => list.dt_txt.includes("18:00:00"));
    fiveDays.forEach((fiveDays) => {
      let castInfo = document.createElement("div");
      let castDay = document.createElement("div");
      let castDiv = document.createElement("div");
      let imgIcon = document.createElement("img");
      let castTemp = document.createElement("div");
      let span = document.createElement("span");
      
      let dayName = new Date(fiveDays.dt_txt).toLocaleString("en-us", {
        weekday: "short",
      });

      castDay.innerHTML = `<b>${dayName}</b>`;
      castTemp.innerHTML = `${fiveDays.main.temp.toFixed(0)}`;
      span.innerHTML = `°F`;
      castDay.className = "days";
      castDiv.className = "daysweather";
      imgIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${fiveDays.weather[0].icon}.png`
      );
      imgIcon.setAttribute("alt", `${fiveDays.weather[0].disc}`);
      castInfo.appendChild(castDay);
      castInfo.appendChild(castDiv);
      castDiv.appendChild(imgIcon);
      castDiv.appendChild(castTemp);
      castTemp.appendChild(span);
      document.querySelector("div.forecast").appendChild(castInfo);
    });
  });
