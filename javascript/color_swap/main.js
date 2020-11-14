$(document).ready(function(){
  ethereum.autoRefreshOnNetworkChange = false;

  let colors = [
    "blue",
    "red",
    "orange",
    "purple",
    "green"
  ]

  let fonts = [
    "Arial",
    "Trebuchet",
    "Lucida Sans",
    "Comic Sans MS",
    "Verdana",
    "Dancing Script"
  ]

  let index = 0;
  $('#box').click(colorSwap);
  setInterval(colorSwap, 1000);

  let fontIndex = 0;
  $('#font-swap').click(swapFont);
  setInterval(swapFont, 1000);

  function swapFont() {
    let currentFont = fonts[fontIndex];
    $("#font-swap").css("font-family", currentFont);
    fontIndex++;
    if(fontIndex == fonts.length) {
      fontIndex = 0;
    }
  }

  function colorSwap() {
    let currentColor = colors[index];
    $('#box').css("background", currentColor);
    index++;
    if(index == colors.length) {
      index = 0;
    }
  }
})



