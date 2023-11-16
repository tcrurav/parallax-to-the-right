function initialize(){
  window.addEventListener("scroll", moveNightSky);
}

function moveNightSky(){
  const SCROLL_VALUE = window.scrollY;
  document.getElementById("bg").style.left = SCROLL_VALUE * 0.5 + "px";
}

initialize();