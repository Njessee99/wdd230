const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1925537df249e2feeb9c942f8dcf140e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#temp").textContent = jsObject.main.temp;
    document.querySelector("#desc").textContent =
      jsObject.weather[0].description;
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector("#windSpd").textContent = jsObject.wind.speed;

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

    //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // const desc = jsObject.weather[0].description;
    // document.getElementById('imagesrc').textContent = imagesrc;
    // document.getElementById('icon').setAttribute('src',imagesrc);
    //  document.getElementById('icon').setAttribute('alt', desc);
  });
const castURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1925537df249e2feeb9c942f8dcf140e&units=imperial";

fetch(castURL)
  .then((response) => response.json())
  .then((jsfObject) => {
    console.log(jsfObject);
    const list = jsfObject["list"];
    const fiveDays = list.filter((list) => list.dt_txt.includes("18:00:00"));
    console.log(fiveDays);
    fiveDays.forEach((fiveDays) => {
      let castInfo = document.createElement("div");
      let castDay = document.createElement("div");
      let castDiv = document.createElement("div");
      let imgIcon = document.createElement("img");
      let castTemp = document.createElement("div");
      let span = document.createElement("span");
      let foreDate = new Date(`${fiveDays.dt_txt}`);
      let foreDay = foreDate.getDay();
      let dayName = new Date(foreDay).toLocaleString('en-us', {weekday: 'short',});
     

      castDay.innerHTML = `${dayName}`;
      castTemp.innerHTML = `${fiveDays.main.temp}`;
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

    // const imgSrc = `https://openweathermap.org/img/w/${fiveDays[0].weather[0].icon}.png`;
    //document.querySelector("#day1temp").textContent = fiveDays[0].main.temp;
    //document.querySelector("#day1icon").setAttribute('src', imgSrc);
  });
