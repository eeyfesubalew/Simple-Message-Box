const btn = document.querySelector(".btn");
const response = document.querySelector(".response");
const form = document.querySelector(".form");
let input = document.querySelector(".input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  response.innerHTML = "";
  response.insertAdjacentHTML("afterbegin", input.value);
  input.value = "";
});
