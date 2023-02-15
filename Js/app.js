const input = document.querySelector("#input");
const info = document.querySelector(".form__info-content");

input.addEventListener("input", (e) => {
  if (e.target.value.length == 0) {
    input.style.borderColor = "#ff5263";
    info.innerText = "Whoops! It looks like you forgot to add your email";
  } else if (
    e.target.value.includes("@") &&
    e.target.value.includes(".") &&
    e.target.value.length > 4
  ) {
    input.style.borderColor = "#c2d3ff";
    info.innerText = "";
  } else {
    input.style.borderColor = "#ff5263";
    info.innerText = "Please provide a valid email address";
  }
});
