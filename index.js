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

    
    const r = parseInt(hexString[0], 16)
    const g = parseInt(hexString[1], 16)
    const b = parseInt(hexString[2], 16)
    

    rgb.textContent = `RGB: ${r}, ${g}, ${b}`;

    showHsl(r, g, b);
}

function showHsl(red, green, blue) {
    let hsl = document.querySelector(".hsl");
    const r = red/255;
    const g = green/255;
    const b = blue/255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
    
    hsl.textContent = `HSL: ${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
  
    
}