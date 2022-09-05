//CSS to RGB
const rgbValue = "rgb(14, 133, 12)"

convertString(rgbValue);

function convertString(value) {
    let red = value.substring(4, value.indexOf(","));
    let green = value.substring(value.indexOf(" ") + 1, value.lastIndexOf(","));
    let blue = value.substring(value.lastIndexOf(",") + 2, value.lastIndexOf(")"));

    let r = parseInt(red);
    let g = parseInt(green);
    let b = parseInt(blue);
    console.log(`rgb(${r}, ${g}, ${b})`);
}