const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1925537df249e2feeb9c942f8dcf140e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#imagesrc').textContent = imagesrc;
    document.querySelector('#icon').setAttribute('src',imagesrc);
    document.querySelector('#icon').setAttribute('alt', desc);
  });