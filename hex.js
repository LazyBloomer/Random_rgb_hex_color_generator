"use strict";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnHexEl = document.querySelector(".btn-click");
const colorHexEl = document.querySelector(".color-name");

btnHexEl.addEventListener("click", function () {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = randomHex;
  colorHexEl.innerHTML = randomHex;
});
