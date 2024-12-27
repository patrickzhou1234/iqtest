function playclaps() {
  document.getElementById("claps").play();
  document.getElementById("background-image").style.width = window.innerWidth + 'px';
  document.getElementById("background-image").style.height = window.innerHeight + 'px';
  document.getElementById("madeit").style.fontSize = (window.innerWidth*window.innerHeight)/9302.4 + 'px';
  document.getElementById("next").style.paddingTop = (window.innerHeight/24.225) + 'px';
  document.getElementById("next").style.paddingBottom = (window.innerHeight/24.225) + 'px';
  document.getElementById("next").style.paddingLeft = (window.innerWidth/38.4) + 'px';
  document.getElementById("next").style.paddingRight = (window.innerWidth/38.4) + 'px';
  setTimeout(displaytext, 1000);
}

function displaytext() {
  $("p").fadeIn();
}