document.addEventListener('contextmenu', event => event.preventDefault());
function resize() {
  document.getElementById("content").style.width = window.innerWidth/2 + 'px';
  document.getElementById("content").style.height = window.innerHeight/2 + 'px';
  document.getElementById("content").style.left = ((window.innerWidth/2) - (window.innerWidth/4)) + 'px';
  document.getElementById("background-image").style.width = window.innerWidth + 'px';
  document.getElementById("background-image").style.height = window.innerHeight + 'px';
  document.getElementById("queue").style.top = window.innerHeight/2 + 'px';
  document.getElementById("queue").style.fontSize = (window.innerHeight*window.innerWidth)/18604.8 + 'px';
  document.getElementById("choice1").style.left = (window.innerWidth/2-(window.innerWidth/8)) + 'px';
  document.getElementById("choice2").style.left = (window.innerWidth/2) + 'px';
  var choice = document.getElementsByClassName("choice");
  var ch;
  var x = 0
  for (ch = 0; ch < choice.length; ch++) {
    choice[ch].style.width = window.innerWidth/8 + 'px';
    choice[ch].style.height = window.innerHeight/8 + 'px';
    choice[ch].style.top = (window.innerHeight-(window.innerHeight/8)) + 'px';
  }
}

function dumb() {
  window.location.href = "https://iqtest.gq/2/dumb"
}

function notdumb() {
  window.location.href = "https://iqtest.gq/2/notdumb"
}