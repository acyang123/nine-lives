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
  CAT = {
    x : 50,
    y: 50,
    v: 0,
    a: .06,
    lifeCount: 1,
    tunaCount: 0
  }
}
