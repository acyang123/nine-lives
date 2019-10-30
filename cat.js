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
    a: .3,
    size: 25,
    lifeCount: 9,
    tunaCount: 0,
    name: "Tuesday McDoom"
  }
}
