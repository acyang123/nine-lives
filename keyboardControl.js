/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  cat : {
    up : false,
    down : false,
    left : false,
    right : false,
    instaDeath: false,
  },
  player2: {
    up: false,
    down: false,
    left: false,
    right: false,
    instaDeath: false,
  }
};
//this makes the cat move when you're pressing the WASD buttons
document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.cat.up = true;
    case "w":
      CONTROLS.cat.up = true;
      break;
    case "s":
      CONTROLS.cat.down = true;
      break;
    case "a":
      CONTROLS.cat.left = true;
      break;
    case "d":
      CONTROLS.cat.right = true;
      break;
      case "W":
        CONTROLS.cat.up = true;
        break;
      case "S":
        CONTROLS.cat.down = true;
        break;
      case "A":
        CONTROLS.cat.left = true;
        break;
      case "D":
        CONTROLS.cat.right = true;
        break;
        case "r":
        CONTROLS.cat.instaDeath = true;
        break;
        case "R":
        CONTROLS.cat.instaDeath = true;
        break;
        case "ArrowLeft":
        CONTROLS.player2.left=true;
        break;
        case "ArrowRight":
        CONTROLS.player2.right=true;
        break;
        case "ArrowUp":
        CONTROLS.player2.up=true;
        break;
        case "ArrowDown":
        CONTROLS.player2.down=true;
        break;
        case "Shift":
        CONTROLS.player2.instaDeath=true;
        break;
    default:
      break;
  }
});

//this makes the cat STOP moving when you're not pressing the WASD buttons
document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.cat.up = false;
      CAT.Player1.jump-=1;
      break;
      case "w":
        CONTROLS.cat.up = false;
        CAT.Player1.jump-=1;
        break;
    case "s":
      CONTROLS.cat.down = false;
      break;
    case "a":
      CONTROLS.cat.left = false;
      break;
    case "d":
      CONTROLS.cat.right = false;
      break;
      case "W":
        CONTROLS.cat.up = false;
        CAT.Player1.jump-=1;
        break;
      case "S":
        CONTROLS.cat.down = false;
        break;
      case "A":
        CONTROLS.cat.left = false;
        break;
      case "D":
        CONTROLS.cat.right = false;
        break;
        case "r":
        CONTROLS.cat.instaDeath = false;
        break;
        case "R":
        CONTROLS.cat.instaDeath = false;
        break;
        case "ArrowLeft":
        CONTROLS.player2.left=false;
        break;
        case "ArrowRight":
        CONTROLS.player2.right=false;
        break;
        case "ArrowUp":
        CONTROLS.player2.up=false;
        break;
        case "ArrowDown":
        CONTROLS.player2.down=false;
        break;
        case "Shift":
        CONTROLS.player2.instaDeath=false;
          removeTempPlatforms();
          CAT.Player2.xvel=4;
        break;
    default:
      break;
  }
});
