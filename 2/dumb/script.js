function playdumb() {
  document.getElementById("dumbaudio").play();
  document.getElementById("background-image").style.width = window.innerHeight + 'px';
  document.getElementById("background-image").style.height = window.innerHeight + 'px';
  document.getElementById("background-image").style.left = (window.innerWidth/2-(window.innerHeight/2)) + 'px';
  document.getElementById("dumb").style.fontSize = (window.innerHeight*window.innerWidth)/3720.96 + 'px';
}