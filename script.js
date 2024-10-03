/*const time = Date().toLocaleTimeString("fr", {
  hour: "2-digit",
  minute: "2-digit",
});
console.log(time);
*/
const hour = Date().slice(16, 18);
console.log(hour);
if (8 > hour > 21) {
  document.getElementById("1").textContent = "GO TO SLEEP";
} else if (hour === 8) {
  document.getElementById("1").textContent = "Enjoy Breakfast";
} else if (8 < hour < 12) {
  document.getElementById("1").textContent = "Good morning";
} else if (hour === 12) {
  document.getElementById("1").textContent = "Enjoy Lunch";
} else if (12 < hour < 21) {
  document.getElementById("1").textContent = "Good afternoon";
}
let theme = true;
if (document.querySelector("button").clicked == true) {
  theme = false;
}
if (theme === true) {
  document.body.style.background = "black";
  document.body.style.color = "white";
  document.getElementById("6").textContent = "Dark Theme";
} else if (theme === false) {
  document.body.style.background = "white";
  document.body.style.color = "black";
  document.getElementById("6").textContent = "Light Theme";
}
