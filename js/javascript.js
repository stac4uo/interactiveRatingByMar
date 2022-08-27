const btn = document.querySelectorAll(".btn");
const mainPart = document.querySelector(".mainPart");
const submitPart = document.querySelector(".submitPart");
const submitBtn = document.querySelector(".submitBtn");
const addRate = document.querySelector(".addRate");
let ocena;

btn.forEach((el) => {
  el.addEventListener("click", klik);
});

function klik() {
  let btnText = this.textContent.trim();
  ocena = btnText;
}

submitBtn.addEventListener("click", () => {
  mainPart.classList.add("hidden");
  submitPart.classList.remove("hidden");
  let text = document.createElement("p");
  if (ocena != undefined) {
    text.textContent = `You selected ${ocena} out of 5`;
  } else {
    text.textContent = `You dont't choose a number`;
  }
  addRate.appendChild(text);
});
