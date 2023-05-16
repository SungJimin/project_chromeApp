// const images = [
//     "01.jpg",
//     "02.jpg",
//     "03.jpg",
// ]
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.prepend(bgImage);

let letters = [
    '#12c2e9, #c471ed, #f64f59',
    '#2193b0, #6dd5ed',
    '#f7797d, #FBD786, #2ebf91',
    '#8360c3, #2ebf91',
    '#FFFDE4, #005AA7',
    '#FC5C7D, #6A82FB',
    '#ff9966, #ff5e62',
    '#4568DC, #B06AB3',
    '#f2709c, #ff9472'
]; 
let colorChips = letters[Math.floor(Math.random() * letters.length)];
document.getElementById('background').style.background = `linear-gradient(70deg, ${colorChips})`;

// console.log(document.getElementById('background').style.background)