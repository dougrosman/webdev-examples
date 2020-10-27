$(document).ready(function(){
  ethereum.autoRefreshOnNetworkChange = false;

  let colors = [
    "blue",
    "red",
    "orange",
    "purple",
    "green"
  ]

  let index = 0;

  $('#box').click(function(){

    
    let currentColor = colors[index];

    $('#box').css("background", currentColor);

    // increment index
    index++;
    console.log(index);
  })



})



