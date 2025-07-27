let sprite = document.getElementById("sprite");
let position = 10;

function moveLeft() {
  position = Math.max(0, position - 10);
  sprite.style.left = position + "px";
}

function moveRight() {
  position = Math.min(260, position + 10); // Adjust based on screen width
  sprite.style.left = position + "px";
}
