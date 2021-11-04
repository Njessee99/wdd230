//code to toggle nav menu//
function toggleNav() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
//code to put current year for copyright
let d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();
//code to place date in document
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("todaysDate").textContent = d.toLocaleDateString(
  "en-UK",
  options
);
//code to make banner appear on fridays
const fri = d.getDay();
const banner = document.querySelector("aside");

if (fri == 5) {
  banner.setAttribute("class", "pancake");
} else {
  banner.setAttribute("class", "notFriday");
}

//code for storm rating scale//
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}