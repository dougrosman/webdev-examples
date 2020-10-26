$(document).ready(function() {

let imageNames = [
    "bird1.jpg",
    "bird2.jpg",
    "bird3.jpg",
    "bird4.jpg",
    "bird5.jpg",
    "bird6.jpg",
    "bird7.jpg",
    "bird8.jpg",
    "bird9.jpg",
    "bird10.jpg",
    "bird11.jpg",
    "bird12.jpg"
];

let counter = 1;

$("#img-swap").click(swapImage);

setInterval(swapImage, 600);

function swapImage() {
    let imgPath = `images/${imageNames[counter]}`;
    console.log(imgPath);

    $("#img-swap").attr("src", imgPath);

    if(counter == imageNames.length-1){
        counter = 0;
    } else {
        counter++;
    }
}







})