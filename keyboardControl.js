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
    default:
      break;
  }
});

//this makes the cat STOP moving when you're not pressing the WASD buttons
document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case " ":
      CONTROLS.cat.up = false;
      break;
      case "w":
        CONTROLS.cat.up = false;
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
        case "R":
        CONTROLS.cat.instaDeath = false;
    default:
      break;
  }
});
