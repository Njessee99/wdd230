const tempF = document.querySelector("#temp").textContent;
const wind = document.querySelector("#windSpd").textContent;
let chill = "";
if ((tempF <= 50) && (wind > 3)){
  chill = windChill(tempF, wind);
}
else {
  chill = `N/A`
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
