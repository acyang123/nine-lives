//this just lets the cat have a picture. dont touch
var catImage = new Image();
var ghostCat = new Image();
var home = new Image();
var enemy=new Image();
function renderSpawn(context){
  home.src="CatHouse.png";
  context.drawImage(home,50,50,25,25);
}
function handleCat2Animation(){
  if (CONTROLS.player2.up && isOnAPlatform2()!=-100&&!CONTROLS.player2.down) {
    CAT.Player2.v = -6.5; //changing this value will affect how high the cat jumps
  }

  if (CONTROLS.player2.down&&!CONTROLS.player2.up) {
    CAT.Player2.y += 2 * Math.abs(CAT.Player2.v); //makes the cat fast fall if you're holding down
  } else {
    CAT.Player2.y += CAT.Player2.v; //makes the cat normal fall otherwise
  }

  if (CONTROLS.player2.left && !isRightOfAPlatform2()) {
    CAT.Player2.x -= CAT.Player2.xvel;//cat moves left
    ghostCat.src="DeadCatLeft.png";
  }
  if (CONTROLS.player2.right && !isLeftOfAPlatform2()) {
    CAT.Player2.x += CAT.Player2.xvel;//cat moves right
    ghostCat.src="DeadCatRight.png";
  }

  // Check if cat is leaving the boundary, if so, dont let it
  if (CAT.Player2.x < 0) {
    CAT.Player2.x = 0;
  } else if (CAT.Player2.x + CAT.Player2.size > GAME.canvas.width) {
    CAT.Player2.x = 575;
  } else if (CAT.Player2.y < 0) {
    //CAT.Player1.y = 0; if you uncomment this out, the cat will no longer be able to jump above the screen. currently its commented out cuz we like letting the cat jump above the screen
  } else if (CAT.Player2.y + CAT.Player2.size > GAME.canvas.height) {
    CAT.Player2.y = GAME.canvas.height-CAT.Player2.size;
    CAT.Player2.v = 0;
  }
  //}

  //Stop the cat if it is on a platform
  if (isOnAPlatform2()!=-100){
    CAT.Player2.y = isOnAPlatform2() - CAT.Player2.size;
    CAT.Player2.v = 0;
  }
  else if (isUnderAPlatform2()!=-100){ //stops the cat if it hits the bottom of a platform
    CAT.Player2.y =isUnderAPlatform2();
    CAT.Player2.v=CAT.Player2.a;
  }
  else {
    CAT.Player2.v+=CAT.Player2.a; //applies gravity
  }
  if (isOnAHazard2()||isLeftOfAHazard2()||isRightOfAHazard2()||isUnderAHazard2()){
    killCat2();

  }
  if (isOnATuna2()||isLeftOfATuna2()||isRightOfATuna2()||isUnderATuna2()){
    CAT.tunaCount+=1;
  }
  if (CONTROLS.player2.instaDeath){
    becomeCorpse();

  }

}
function handleCatAnimation() {
  var spritename = "Cat pics/CatLife"
  spritename+=CAT.Player1.lifeCount
  if (!CAT.Player1.isDOG&&CAT.Player1.lifeCount==0){
    spritename="Cat pics/CatLife1"
  }
  if (CAT.Player1.direction==1){
    spritename+="Left";
  }else{
    spritename+="Right";
  }
  spritename+=".png";
  catImage.src=spritename;
if (isOnAPlatform()!=-100){
  CAT.Player1.jump=2;
}
  //this lets the cat jump if she's on a platform
  if (CONTROLS.cat.up &&!CONTROLS.cat.down) {
    if (!CAT.Player1.isDOG&& isOnAPlatform()!=-100){
      CAT.Player1.v = -6.5; //changing this value will affect how high the cat jumps
    }else if(CAT.Player1.isDOG&&CAT.Player1.jump>0){
    CAT.Player1.v = -6.5; //changing this value will affect how high the cat jumps
    CONTROLS.cat.up=false;
  }
  }

  if (CONTROLS.cat.down&&!CONTROLS.cat.up) {
    CAT.Player1.y += 2 * Math.abs(CAT.Player1.v); //makes the cat fast fall if you're holding down
  } else {
    CAT.Player1.y += CAT.Player1.v; //makes the cat normal fall otherwise
  }

  if (CONTROLS.cat.left && !isRightOfAPlatform()) {
    CAT.Player1.x -= 4;//cat moves left
    CAT.Player1.direction=1;
  }
  if (CONTROLS.cat.right && !isLeftOfAPlatform()) {
    CAT.Player1.x += 4;//cat moves right
    CAT.Player1.direction=0;
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
    CAT.tunaCount+=1;
  }
  if (isOnGoal()||isUnderGoal()||isLeftOfGoal()||isRightOfGoal()){
    CAT.Player1.direction=1;
    CAT.Player1.x = 50;
    CAT.Player1.y= 50;
    CAT.Player1.v= 0;
    CAT.Player1.a= .25;
    if (!CAT.Player1.isDOG){
    CAT.Player1.lifeCount= 9;
  }
    GAME.level++;
  }
}
function handleEnemyAnimation () {
  var random=Math.random()*2+1;
  var distanceX=ENEMY.x-CAT.Player1.x;
  var distanceY=ENEMY.y-CAT.Player1.y;
  var relativeDirection;
  if (distanceX>0&&distanceY>0)
  {
    relativeDirection=1;
  }
  else if (distanceX>0&&distanceY<0)
  {
    relativeDirection=2;
  }
  else if (distanceX<0&&distanceY>0)
  {
    relativeDirection=3;
  }
  else if (distanceX<0&&distanceY<0)
  {
    relativeDirection=2;
  }

  if (random==1)
  {
    if (relativeDirection==1)
    {
      ENEMY.x+=GAME.canvas.width/6;
      ENEMY.y+=GAME.canvas.height/6;
    }
    else if (relativeDirection==2)
    {
      ENEMY.x+=GAME.canvas.width/6;
      ENEMY.y-=GAME.canvas.height/6;
    }
    else if (relativeDirection==2)
    {
      ENEMY.x-=GAME.canvas.width/6;
      ENEMY.y+=GAME.canvas.height/6;
    }
    else if (relativeDirection==2)
    {
      ENEMY.x-=GAME.canvas.width/6;
      ENEMY.y-=GAME.canvas.height/6;
    }

  }
  if (random==2)
  {
    ENEMY.x+=150*(Math.random()*2-1);
    ENEMY.y+=150*(Math.random()*2+1);
  }

}
function RenderEnd(context){
  home.src="CatHouse.png";
  for (var i=0;i<END[GAME.level].length;i++){
    var hom=END[GAME.level][i];      context.drawImage(home,hom.xpt, hom.ypt, hom.xl, hom.yl);
  }
}
function RenderCat(context) { //draws the cat to the screen
  context.drawImage(catImage, CAT.Player1.x, CAT.Player1.y, CAT.Player1.size, CAT.Player1.size);
}
function RenderCat2(context){
  context.drawImage(ghostCat,CAT.Player2.x,CAT.Player2.y, CAT.Player2.size, CAT.Player2.size);
}
function RenderEnemy(context){
  context.drawImage(enemy,ENEMY.x,ENEMY.y, ENEMY.size, ENEMY.size);
}
function RenderHazards(context){
  var hazard=new Image();
  hazard.src = "hazard.png";
  for (var i=0;i<HAZARDS[GAME.level].length;i++){
    var haz=HAZARDS[GAME.level][i];     context.drawImage(hazard,haz.xpt, haz.ypt, haz.xl, haz.yl);
  }
}
function RenderTuna(context){
  var tuna1 = new Image();
  tuna1.src= " tuna.png"
  for (var i=0;i<TUNA[GAME.level].length;i++){
    var tuna=TUNA[GAME.level][i];
    if (!tuna.collected){
      context.drawImage(tuna1,tuna.xpt,tuna.ypt,tuna.xl,tuna.yl);
    }
  }
}

function RenderPlatforms(context) { //draws every platform in PLATFORMS onnto the screen
  var platforms = new Image();
  platforms.src = "dirt.png";
  for (var i=0;i<PLATFORMS[GAME.level].length;i++){
    var plat=PLATFORMS[GAME.level][i];
    context.drawImage(platforms,plat.xpt, plat.ypt, plat.xl, plat.yl); //you can replace this with .drawImage once you have pictures for the platforms
  }
}

function runGame() { //the basic game-running loop. handle with caution
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
if (GAME.level>=GAME.levelmax){
  if (CAT.tunaCount==CAT.maxTuna){
    window.location.href = "https://github.com/Danimal-63";
  }else{
    context.fillText("Go to https://github.com/Danimal-63", 220, 150);
}
}else if (GAME.level!=-1) { //when the player loses, GAME.started should be set to FALSE
    GAME.movement+=1;
    HAZARDS[2][1].xpt=25*(GAME.movement/5);
    HAZARDS[2][2].xpt=25*(GAME.movement/5)+75;

    if(GAME.movement>115){
      GAME.movement=60;
    }
    // 1 - Reposition the cat
    handleCatAnimation();
    RenderEnemy(context);
    handleEnemyAnimation();
    if (CONTROLS.cat.instaDeath){

      killCat();

    }

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw the stuff to the screen
  if (  GAME.level<GAME.levelmax){
    renderSpawn(context);
    RenderCat(context);
    RenderEnemy(context);
    handleEnemyAnimationEnemy();



    if(CAT.Player2.on){
      handleCat2Animation();
      RenderCat2(context);
    }
    RenderPlatforms(context);
    RenderHazards(context);
    RenderTuna(context);
    RenderEnd(context);
  }
  } else {
    document.getElementById("b").onmouseover = function() {
      if (GAME.level==-1){
      GAME.level=0;
      CAT.Player2.on=true;}
    }
      document.getElementById("a").onmouseover = function() {
        if (GAME.level==-1){
        GAME.level=0;
        var ran = parseInt(Math.random()*10);
        if (ran==0){
          CAT.Player1.isDOG=true;
          CAT.Player1.lifeCount=0;
        }
      };
    }
        context.font = "30px Arial";
        context.fillText("Nine Lives", 220, 150);

        context.font = "20px Arial";
        context.fillText("Lives: " + CAT.Player1.lifeCount, 50, 20);


      }
      window.requestAnimationFrame(runGame);
    }

    window.requestAnimationFrame(runGame);
