const fri = d.getDay();
const banner = document.querySelector("aside");

if (fri == 5) {
  banner.setAttribute("class", "pancake");
} else {
  banner.setAttribute("class", "notFriday");
}