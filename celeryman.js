var imgNum = Math.floor(Math.random() * (4 - 1)) + 1;
var filename = "assets/" + imgNum + ".gif";
var extensionId = chrome.runtime.id;
filename = 'chrome-extension://' + extensionId + "/" + filename;
console.log("Filename: " + filename);
show_image(filename)

function show_image(src) {
  console.log("Inside show_image method!")
  var img = document.createElement("img");
  img.src = src;

  // This next line will just add it to the <body> tag
  console.log("Appending child")
  document.body.appendChild(img);
}