/**
 *  handleCatAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
 var catImage = new Image();


function handleCatAnimation() {

  switch (CAT.lifeCount){
    case 1:
    catImage.src = "Cat pics/black cat.jpg";
    break;
    case 2:
    catImage.src = "Cat pics/gray cat.jpg";
    break;
    case 3:
    catImage.src = "Cat pics/pink cat.jpg";
    break;
    case 4:
    catImage.src = "Cat pics/magenta cat.jpg";
    break;
    case 5:
    catImage.src = "Cat pics/blue cat.jpg";
    break;
    case 6:
    catImage.src = "Cat pics/green cat.jpg";
    break;
    case 7:
    catImage.src = "Cat pics/yellow cat.jpg";
    break;
    case 8:
    catImage.src = "Cat pics/orange cat.jpg";
    break;
    case 9:
    catImage.src = "Cat pics/red cat.jpg";
    break;
    default:
    catImage.src = "Cat pics/black cat.jpg";
    break;
  }



  if (CONTROLS.cat.up && CAT.v == 0) {
    CAT.v = -2.5;
  }
  if (CAT.v != 0) {
    CAT.v += CAT.a;
    }

  if (CONTROLS.cat.down){
    CAT.y += 2*CAT.v;
  }
    else{
      CAT.y += CAT.v;
    }


  if (CONTROLS.cat.left) {
    CAT.x -= 4;
  }
  if (CONTROLS.cat.right) {
    CAT.x += 4;
  }

  // Check if ship is leaving the boundary, if so, switch sides
  if (CAT.x < 0) {
    CAT.x = 0;
  } else if (CAT.x >  GAME.canvas.width) {
    CAT.x = 600;
  } else if (CAT.y < 0) {
    CAT.y = 0;
  } else if (CAT.y > GAME.canvas.height) {
    CAT.y = 300;
  }
}

function RenderCat(context) {
  context.drawImage(catImage, CAT.x, CAT.y, 25, 25);
}
/*
function HandleNewObjectMovement() {

  if (NEW_OBJECT.x > GAME.canvas.width - 25) {
    NEW_OBJECT.i *= -1.05;
    NEW_OBJECT.j *= 1.05;
    scoreMult += 1;
  } else if (NEW_OBJECT.x < 0) {
    NEW_OBJECT.i *= -1.05;
    NEW_OBJECT.j *= 1.05;
    scoreMult += 1;
  } else if (NEW_OBJECT.y > GAME.canvas.height - 25) {
    NEW_OBJECT.i *= 1.05;
    NEW_OBJECT.j *= -1.05;
    scoreMult += 1;
  } else if (NEW_OBJECT.y < 0) {
    NEW_OBJECT.i *= 1.05;
    NEW_OBJECT.j *= -1.05;
    scoreMult += 1;
  }
  NEW_OBJECT.x += (1 * NEW_OBJECT.i);
  NEW_OBJECT.y += (1 * NEW_OBJECT.j);
  if (NEW_OBJECT.i > 600) {
    GAME.started = false;
  }

  //if the spaceship is touching the object, increase the score
  if (NEW_OBJECT.x <= CAT.x && NEW_OBJECT.x + 25 >= CAT.x && NEW_OBJECT.y <= CAT.y && NEW_OBJECT.y + 25 >= CAT.y) {
    highscore += (1 * scoreMult);
  }
}
*/
function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {

    // 1 - Reposition the objects
    handleCatAnimation();
    //HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);
  //  context.fillText("Score: " + highscore, 530, 20)
    // 3 - Draw new items
    RenderCat(context);
  //  RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over", 220, 150);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
