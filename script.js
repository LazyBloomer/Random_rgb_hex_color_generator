"use strict";

const btnEl = document.querySelector(".btn-click");
const simpleEl = document.querySelector(".nav-item__simple");
const hexEl = document.querySelector(".nav-item__hex");
let colorEl = document.querySelector(".color-name");
let innerBoxEl = document.getElementById("inner-boxEl");

const colorBox = ["red", "blue", "green", "yellow", "voilet", "pink", "purple"];

function getRandomRGB() {
  let randomCol = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  return randomCol;
}

btnEl.addEventListener("click", function () {
  // let random = Math.floor(Math.random() * colorBox.length);
  let [r, g, b] = getRandomRGB();
  console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  colorEl.innerHTML = `rgb(${r},${g},${b})`;

  // document.body.style.backgroundColor = colorBox[random];
  // document.getElementById("inner-boxEl").style.backgroundColor =colorBox[random];
});

getRandomRGB();
