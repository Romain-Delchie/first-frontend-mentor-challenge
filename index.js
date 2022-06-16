const choices = document.querySelectorAll("input");
const form = document.querySelector("form");
const selectInfo = document.getElementById("selectInfo");
const itemThanks = document.querySelector(".thankYou");
console.log(itemThanks);
let number;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) break;
  }
  number = choices[i].value;
  selectInfo.innerHTML = `<p>You selected ${number} out of 5</p>`;
  itemThanks.style.zIndex = "0";
});
