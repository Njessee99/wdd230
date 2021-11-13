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
