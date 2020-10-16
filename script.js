var character = document.getElementById("character");
var block = document.getElementById("block");
var bgmusic = new Audio("background music.mp3");
var jumpmusic = new Audio("jump.mp3");
var gameover = new Audio("game over.mp3");
var mute = false;
var counter = 0;
counter = 0;
start = false;
function gameplay() {
  start = true;
  block.classList.add("blockani");
  document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
}
function gamepause() {
  start = false;
  block.classList.remove("blockani");
  document.getElementById("scoreSpan").innerHTML = 0;
}

setTimeout(() => {
  bgmusic.play();
}, 100);
function jump() {
  if (start == true) {
    if (mute == false) {
      jumpmusic.play();
    }
    if (character.classList == "animate") {
      return;
    }
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
    }, 300);
  }
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    gamepause();
    if (mute == false) {
      bgmusic.pause();
      gameover.play();
    }
    alert("Game Over. score: " + Math.floor(counter / 100));
    if (mute == false) {
      gameover.pause();
      bgmusic.play();
    }
    counter = 0;
  } else {
    if (start == true) {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(
        counter / 100
      );
    }
  }
}, 10);

function stop() {
  mute = true;
  bgmusic.pause();
}
function play() {
  mute = false;
  bgmusic.play();
}
