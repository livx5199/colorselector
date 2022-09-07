"use strict";

let colordisplay = document.querySelector(".farvedisplay");
const colorinput = document.querySelector("input");

window.addEventListener("DOMContentLoaded", init());

//Adds eventlistener to input, calls showColor
function init() {
    colorinput.addEventListener("input", showColor, false);
}

//Sets background-color on colordisplay to current inputcolor, calls showValues
function showColor() {
  colordisplay.style.background = colorinput.value;
  
  showValues();
}

//Places various color-values in HTML, calls getRgb and getHsl
function showValues() {
  let hexValue = colorinput.value;
  const rgbValue = getRgb(hexValue);
  const hslValue = getHsl(rgbValue[0], rgbValue[1], rgbValue[2]);
  
  let hsl = document.querySelector(".hsl");
  let hex = document.querySelector(".hex");
  let rgb = document.querySelector(".rgb");
  
  hex.textContent = `HEX: ${hexValue}`;
  rgb.textContent = `RGB: ${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]}`;
  hsl.textContent = `HSL: ${hslValue[0].toFixed(0)}, ${hslValue[1].toFixed(0)}%, ${hslValue[2].toFixed(0)}%`;

  getRgb(hexValue);
  getHsl(rgbValue[0], rgbValue[1], rgbValue[2]);
}

//Removes the # from hex colorcode, splits it into an array, isolates the 
//rgb - values and turns them into numbers.Returns the array to showValues
function getRgb(input) {
    const rgbCleaned = input.replace("#", "");
    let hexString = rgbCleaned.match(/.{1,2}/g);  
    
    const r = parseInt(hexString[0], 16)
    const g = parseInt(hexString[1], 16)
    const b = parseInt(hexString[2], 16)

  return [r, g, b];
}

//Calculates hsl values from the rgb-values, and returns them to showValues as an array
function getHsl(red, green, blue) {
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
    
  return [h, s, l];
}

