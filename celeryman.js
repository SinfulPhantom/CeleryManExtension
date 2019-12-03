// This file will play the CeleryMan extension once clicked.

var imgNum = Math.floor(Math.random() * (4 - 1)) + 1;
var filename = "assets/gifs/" + imgNum + ".gif";
var extensionId = chrome.runtime.id;
filename = 'chrome-extension://' + extensionId + "/" + filename;

loadCeleryMan(filename)

function loadCeleryMan(src) {
  // Play the audio and display the gif
  play_audio();

  var img = document.createElement("img");
  img.src = src;

  document.body.appendChild(img);
}

function play_audio() {
  // Plays the Tayne audio once called
  var myAudio = new Audio(chrome.runtime.getURL("assets/audio/tayne_music.mp3"));
  myAudio.loop = true;
  myAudio.play();
}