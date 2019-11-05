function initializeCat(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  GAME = {
    canvas : {
      width : 600,
      height : 300
    },
    started : true,
    level : 1
  }
  CAT = { //x and y are the cat's spawn coordinates
    x : 50,
    y: 50,
    v: 0, //this is the speed at which the cat is falling
    a: .25, //this is the cat's acceleration due to gravity
    size: 25, //this is the size of the cat square
    lifeCount: 9, //this is which life the count is on. if you change it (btwn 1 and 9) the cat will have different colors. that part is in animate.js
    tunaCount: 0,
    name: "Tuesday McDoom" //this is called nowhere but please dont change it
  }
}

function isOnAPlatform() {
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.x +CAT.size > plat.xpt && CAT.x < plat.xpt + plat.xl && CAT.y + CAT.size >= plat.ypt && CAT.y + CAT.size <= plat.ypt + 10) {
      b = plat.ypt;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAPlatform() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = -100;
  for (const plat of PLATFORMS) {
    if (CAT.x +CAT.size > plat.xpt && CAT.x < plat.xpt + plat.xl && CAT.y >= plat.ypt +plat.yl -10 && CAT.y <= plat.ypt +plat.yl) {
      b = plat.ypt + plat.yl;
    }
  }
  return b;
}

function isRightOfAPlatform() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.x > plat.xpt +plat.xl -10 && CAT.x <= plat.xpt + plat.xl && CAT.y + CAT.size > plat.ypt && CAT.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAPlatform() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const plat of PLATFORMS) {
    if (CAT.x +CAT.size >= plat.xpt && CAT.x +CAT.size <= plat.xpt +10  && CAT.y +CAT.size> plat.ypt && CAT.y  < plat.ypt + plat.yl) {
      b = true;
    };
  }
  return b;
}


//this function adds a platform with its top left corner at (x,y), a width of w, and a length of l
function addPlatform(x, y, w, l){
  PLATFORMS.push({xpt: x, ypt: y, xl: w, yl: l});
}

//this function CLEARS the level of all platforms, but keeps the floor. If there was some sort of levelCount, I'd put it in here.
function newLevel(){
  PLATFORMS= [{xpt: 0,   ypt:300,  xl: 600, yl: 200}];
}
function killCat(){
if(CAT.lifeCount>1){
  addPlatform(CAT.x,CAT.y,CAT.size,CAT.size);
  CONTROLS.cat.instaDeath=false;
  CAT.lifeCount-=1;
}
CAT.x=50;
CAT.y=50
CAT.v=0;
}

function isOnAHazard() {
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.x +CAT.size > haz.xpt && CAT.x < haz.xpt + haz.xl && CAT.y + CAT.size >= haz.ypt && CAT.y + CAT.size <= haz.ypt + 10) {
      b = true;
    }
  }
  return b;
} //detects if the cat is on a platform, returns the PLATFORM's Y-POSITION if so, -100 otherwise

function isUnderAHazard() {//detects if the cat is under a platform, returns the BOTTOM OF PLATFORM's Y-POSITION if so, -100 otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.x +CAT.size > haz.xpt && CAT.x < haz.xpt + haz.xl && CAT.y >= haz.ypt +haz.yl -10 && CAT.y <= haz.ypt +haz.yl) {
      b = true;
    }
  }
  return b;
}

function isRightOfAHazard() { //detects if cat is directly to the right of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.x > haz.xpt +haz.xl -10 && CAT.x <= haz.xpt + haz.xl && CAT.y + CAT.size > haz.ypt && CAT.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}

function isLeftOfAHazard() {  //detects if cat is directly to the left of a platform, returns TRUE if so, false otherwise
  var b = false;
  for (const haz of HAZARDS) {
    if (CAT.x +CAT.size >= haz.xpt && CAT.x +CAT.size <= haz.xpt +10  && CAT.y +CAT.size> haz.ypt && CAT.y  < haz.ypt + haz.yl) {
      b = true;
    };
  }
  return b;
}


//this function adds a platform with its top left corner at (x,y), a width of w, and a length of l
function addHazard(x, y, w, l){
  HAZARDS.push({xpt: x, ypt: y, xl: w, yl: l});
}
