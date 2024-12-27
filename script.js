document.addEventListener('contextmenu', event => event.preventDefault());
function resize() {
  document.getElementById("welcome").style.fontSize = (window.innerWidth*window.innerHeight)/35120 + 'px';
  document.getElementById("background-image").style.width = window.innerWidth + 'px';
  document.getElementById("background-image").style.height = window.innerHeight + 'px';
  document.getElementById("startbutton").style.top = ((window.innerHeight/2) - (window.innerHeight/6)) + 'px';
  document.getElementById("startbutton").style.left = ((window.innerWidth/2) - (window.innerWidth/6)) + 'px';
  document.getElementById("startbutton").style.width = (window.innerWidth/3) + 'px';
  document.getElementById("startbutton").style.height = (window.innerHeight/3) + 'px';
  document.getElementById("startbutton").style.fontSize = (window.innerWidth/32) + 'px';
}

function start() {
  window.location.href = "https://iqtest.gq/1";
}