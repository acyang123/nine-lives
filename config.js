var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var CAT = {
  x : 50,
  y: 50,
  v: 0,
  a: 15,
  size: 25,
  lifeCount: 1,
  tunaCount: 0,
  name: "Tuesday McDoom"
};


var PLATFORMS = [
{xpt: 100, ypt: 150, xl: 60, yl: 30},
{xpt: 200, ypt: 230, xl: 60, yl: 30},
{xpt: 400, ypt: 100, xl: 60,  yl: 200},
{xpt: 0,  ypt:300,  xl: 600, yl: 200}
];
