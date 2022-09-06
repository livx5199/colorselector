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
    showRgb(input.value);
    
}

function showHex(input) {
    console.log(input);
    let hex = document.querySelector(".hex");
    hex.textContent = `HEX: ${input}`;

}

function showRgb(input) {
    let rgb = document.querySelector(".rgb");

    const rgbCleaned = input.replace("#", "");
    let hexString = rgbCleaned.match(/.{1,2}/g);  

    let rgbString = [
        parseInt(hexString[0], 16),
        parseInt(hexString[1], 16),
        parseInt(hexString[2], 16)
    ];

    rgb.textContent = `RGB: ${rgbString}`;
}