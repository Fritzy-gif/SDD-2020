// create new var//
var score = 0;
var lives = 3;


//create fns//
function pacmanControls() {
    if (keyWentDown("right")) {
      pacman.velocityX = 5;
      pacman.velocityY = 0;
      pacman.setAnimation("pacmanR");
    }
    if (keyWentDown("left")) {
      pacman.velocityX = -5;
      pacman.velocityY = 0;
      pacman.setAnimation("pacmanL");
    }
    if (keyWentDown("up")) {
      pacman.velocityY = -5;
      pacman.velocityX = 0;
      pacman.setAnimation("pacmanU");
    }
    if (keyWentDown("down")) {
      pacman.velocityY = 5;
      pacman.velocityX = 0;
      pacman.setAnimation("pacmanD");
    }
}