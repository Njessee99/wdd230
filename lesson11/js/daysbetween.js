const today = Date.now();
const millisecsToDays = 86400000;
const lastVisit = localStorage.getItem("lastvisit") || today;

numberofdays = ((today - lastVisit) / millisecsToDays).toFixed(0);

if (numberofdays == 0) {
  document.querySelector("#daysbetween").innerHTML = `This is your first visit.`;
} else {
  document.querySelector(
    "#daysbetween"
  ).innerHTML = `Last visited ${numberofdays} days ago.`;
}

localStorage.setItem("lastvisit", today);
