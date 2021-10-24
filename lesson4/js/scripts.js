//code to toggle nav menu//
function toggleNav() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
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

let today = new Date();
let dayName = daynames[today.getDay()];
let monthName = months[today.getMonth()];
let year = today.getFullYear();
let fulldate = `${dayName}, ${today.getDate()} ${monthName} ${year}`;

document.getElementById("todaysDate").textContent = fulldate;
