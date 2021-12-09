//code to toggle nav menu//
function toggleNav() {
    document.querySelector("#primaryNav").classList.toggle("hide");
  };
//code to toggle join info//
function toggleInfo() {
  document.querySelector("#nfp").classList.toggle("hidden");
};
  //code to put current year for copyright
let d = new Date();
document.querySelector("#currentyear").textContent = d.getFullYear();

//code for last modified date
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
  
  document.querySelector("#lastModified").textContent = `Updated: ${fulldate}`;