"use strict";
let colordisplay = document.querySelector(".farvedisplay");
const input = document.querySelector("input");
console.log(colordisplay.style);

window.addEventListener("DOMContentLoaded", init());

function init() {
    input.addEventListener("input", updateColor, false);
}

function updateColor(event) {
    colordisplay.style.background = input.value;
    // console.log(colordisplay.style.background);

    showHex(input.value);
}

function showHex(input) {
    console.log(input);
    let hex = document.querySelector(".hex");
    hex.textContent = `HEX: ${input}`;
}