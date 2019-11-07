//this just lets the cat have a picture. dont touch
var catImage = new Image();


function handleCatAnimation() {

//this is the part that change's the cat's picture based on which life it's on. note that there's currently no way to change which life the cat is on, except by typing CAT.Player1.lifeCount-- in the inspect element console
  switch (CAT.Player1.lifeCount) {
    case 9:
      catImage.src = "Cat pics/black cat.jpg";
      break;
    case 8:
      catImage.src = "Cat pics/gray cat.jpg";
      break;
    case 7:
      catImage.src = "Cat pics/pink cat.jpg";
      break;
    case 6:
      catImage.src = "Cat pics/magenta cat.jpg";
      break;
    case 5:
      catImage.src = "Cat pics/blue cat.jpg";
      break;
    case 4:
      catImage.src = "Cat pics/green cat.jpg";
      break;
    case 3:
      catImage.src = "Cat pics/yellow cat.jpg";
      break;
    case 2:
      catImage.src = "Cat pics/orange cat.jpg";
      break;
    case 1:
      catImage.src = "Cat pics/red cat.jpg";
      break;
    default:
      catImage.src = "Cat pics/black cat.jpg";
      break;
  }

//this lets the cat jump if she's on a platform
  if (CONTROLS.cat.up && isOnAPlatform()!=-100&&!CONTROLS.cat.down) {
    CAT.Player1.v = -6.5; //changing this value will affect how high the cat jumps
  }

  if (CONTROLS.cat.down&&!CONTROLS.cat.up) {
    CAT.Player1.y += 2 * Math.abs(CAT.Player1.v); //makes the cat fast fall if you're holding down
  } else {
    CAT.Player1.y += CAT.Player1.v; //makes the cat normal fall otherwise
  }

  if (CONTROLS.cat.left && !isRightOfAPlatform()) {
    CAT.Player1.x -= 4;//cat moves left
  }
  if (CONTROLS.cat.right && !isLeftOfAPlatform()) {
    CAT.Player1.x += 4;//cat moves right
  }

  // Check if cat is leaving the boundary, if so, dont let it
  if (CAT.Player1.x < 0) {
    CAT.Player1.x = 0;
  } else if (CAT.Player1.x + CAT.Player1.size > GAME.canvas.width) {
    CAT.Player1.x = 575;
  } else if (CAT.Player1.y < 0) {
    //CAT.Player1.y = 0; if you uncomment this out, the cat will no longer be able to jump above the screen. currently its commented out cuz we like letting the cat jump above the screen
  } else if (CAT.Player1.y + CAT.Player1.size > GAME.canvas.height) {
    CAT.Player1.y = GAME.canvas.height-CAT.Player1.size;
    CAT.Player1.v = 0;
  }
  //}

  //Stop the cat if it is on a platform
  if (isOnAPlatform()!=-100){
      CAT.Player1.y = isOnAPlatform() - CAT.Player1.size;
      CAT.Player1.v = 0;
    }
  else if (isUnderAPlatform()!=-100){ //stops the cat if it hits the bottom of a platform
    CAT.Player1.y =isUnderAPlatform();
    CAT.Player1.v=CAT.Player1.a;
  }
  else {
    CAT.Player1.v+=CAT.Player1.a; //applies gravity
  }
  if (isOnAHazard()||isLeftOfAHazard()||isRightOfAHazard()||isUnderAHazard()){
   killCat();
 }
 if (isOnATuna()||isLeftOfATuna()||isRightOfATuna()||isUnderATuna()){
   CAT.Player1.tunaCount+=1;
 }
  }


function RenderCat(context) { //draws the cat to the screen
  context.drawImage(catImage, CAT.Player1.x, CAT.Player1.y, CAT.Player1.size, CAT.Player1.size);
}

function RenderHazards(context){
  context.fillStyle = "#FF0000";
  for (const haz of HAZARDS)
    context.fillRect(haz.xpt, haz.ypt, haz.xl, haz.yl);
}
function RenderTuna(context){
  context.fillStyle = "#0000ff"
  for (const tuna of TUNA){
      if (!tuna.collected){
      context.fillRect(tuna.xpt,tuna.ypt,tuna.xl,tuna.yl);
    }
    }
}

function RenderPlatforms(context) { //draws every platform in PLATFORMS onnto the screen
  context.fillStyle = "#000000";
  for (const plat of PLATFORMS)
    context.fillRect(plat.xpt, plat.ypt, plat.xl, plat.yl); //you can replace this with .drawImage once you have pictures for the platforms
}

function runGame() { //the basic game-running loop. handle with caution
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) { //when the player loses, GAME.started should be set to FALSE

    // 1 - Reposition the cat
    handleCatAnimation();
    if (CONTROLS.cat.instaDeath){
      killCat();
    }

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw the stuff to the screen
    RenderCat(context);
    RenderPlatforms(context);
    RenderHazards(context);
    RenderTuna(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over", 220, 150);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
