//code to put current year for copyright
let copyyear = new Date();

document.getElementById("currentyear").textContent = copyyear.getFullYear();
//code to place the last modified date in document
let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let lastMod = new Date(document.lastModified);
let dayName = daynames[lastMod.getDay()];
let monthName = months[lastMod.getMonth()];
let year = lastMod.getFullYear();
let fulldate = `${dayName}, ${monthName} ${lastMod.getDate()} ${year}, ${lastMod.getHours()}:${lastMod.getMinutes()}:${lastMod.getSeconds()}`;

document.getElementById("modified").textContent = fulldate;
