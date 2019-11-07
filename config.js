//honestly, I don't know what anything in this file does. I wouldn't touch any of them, except platforms, which you can add to and remove from with the functions described in the cat.js file (don't ask why they're in there)

var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var CAT = {
  tunaCount: 0,
  Player1:{
  x : 50,
  y: 50,
  spawnX: 50,
  spawnY: 0,
  v: 0,
  a: 15,
  size: 25,
  lifeCount: 1,
  name: "Tuesday McDoom"
},
Player2:{
x : 50,
y: 50,
spawnX: 50,
spawnY: 0,
v: 0,
a: 15,
size: 25,
lifeCount: 1,
name: "Tuesday McDoom"
}
};


var PLATFORMS = [
{xpt: 100, ypt: 150, xl: 60, yl: 30},
{xpt: 200, ypt: 230, xl: 60, yl: 30},
{xpt: 400, ypt: 100, xl: 60, yl: 200},
{xpt: 0,   ypt:300,  xl: 600, yl: 200},
{xpt:25, ypt:75 , xl: 50, yl: 15,}
];
var HAZARDS = [
  {xpt:0, ypt:150,xl:45,yl:55 }
]
var TUNA = [
  {xpt:400, ypt:50, xl:25, yl: 25, collected: false}
]
