/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  cat : {
    up : false,
    down : false,
    left : false,
    right : false
  },

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
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
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
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
    default:
      break;
  }
});
