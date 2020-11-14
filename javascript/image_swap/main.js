$(document).ready(function() {

let imageNames = [
    "images/bird1.jpg",
    "images/bird2.jpg",
    "images/bird3.jpg",
    "images/bird4.jpg",
    "images/bird5.jpg",
    "images/bird6.jpg",
    "images/bird7.jpg",
    "images/bird8.jpg",
    "images/bird9.jpg",
    "images/bird10.jpg",
    "images/bird11.jpg",
    "images/bird12.jpg"
];

let index = 0;

$("#img-swap").click(swapImage);

setInterval(swapImage, 100);

function swapImage() {
    let imgPath = imageNames[index];
    console.log(imgPath);

    // $("#img-swap").attr("src", imgPath);
    $('body').css("cursor", `url(${imgPath}), default`)

    index++;
    if(index == imageNames.length){
        index = 0;
    }
}







})