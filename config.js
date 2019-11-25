//honestly, I don't know what anything in this file does. I wouldn't touch any of them, except platforms, which you can add to and remove from with the functions described in the cat.js file (don't ask why they're in there)

var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : -1
};

var CAT = {
  direction: 0,
  tunaCount: 0,
  Player1:{
  x : 50,
  y: 50,
  spawnX: 50,
  spawnY: 0,
  v: 0,
  a: .25,
  size: 25,
  lifeCount: 9,
  name: "Tuesday McDoom"
},
Player2:{
  direction: 0,
x : 50,
y: 50,
spawnX: 50,
spawnY: 0,
v: 0,
a: .25,
xvel:4,
size: 25,
lifeCount: 1,
name: "Monday McDoom"
}
};


var PLATFORMS = [
  [
{xpt: 100, ypt: 150, xl: 25, yl: 25},
{xpt: 125, ypt: 150, xl: 25, yl: 25},
{xpt: 200, ypt: 230, xl: 25, yl: 25},
{xpt: 225, ypt: 230, xl: 25, yl: 25},
{xpt: 400, ypt: 100, xl: 25, yl: 25},
{xpt: 425, ypt: 100, xl: 25, yl: 25},
{xpt: 400, ypt: 125, xl: 25, yl: 25},
{xpt: 425, ypt: 125, xl: 25, yl: 25},
{xpt: 400, ypt: 150, xl: 25, yl: 25},
{xpt: 425, ypt: 150, xl: 25, yl: 25},
{xpt: 400, ypt: 175, xl: 25, yl: 25},
{xpt: 425, ypt: 175, xl: 25, yl: 25},
{xpt: 400, ypt: 200, xl: 25, yl: 25},
{xpt: 425, ypt: 200, xl: 25, yl: 25},
{xpt: 400, ypt: 225, xl: 25, yl: 25},
{xpt: 425, ypt: 225, xl: 25, yl: 25},
{xpt: 400, ypt: 250, xl: 25, yl: 25},
{xpt: 425, ypt: 250, xl: 25, yl: 25},
{xpt: 400, ypt: 275, xl: 25, yl: 25},
{xpt: 425, ypt: 275, xl: 25, yl: 25},
{xpt: 400, ypt: 300, xl: 25, yl: 25},
{xpt: 425, ypt: 300, xl: 25, yl: 25},
{xpt: 0,   ypt:300,  xl: 600, yl: 200},
{xpt:50, ypt:75 , xl: 25, yl: 25,}
],
[
  {xpt:50, ypt:75 , xl: 25, yl: 25,},
  {xpt: 0,   ypt:300,  xl: 600, yl: 200},
  {xpt:275, ypt:0, xl:25, yl:25},
  {xpt:275, ypt:25, xl:25, yl:25},
  {xpt:275, ypt:50, xl:25, yl:25},
  {xpt:275, ypt:75, xl:25, yl:25},
  {xpt:275, ypt:100, xl:25, yl:25},
  {xpt:275, ypt:125, xl:25, yl:25},
  {xpt:275, ypt:150, xl:25, yl:25},
  {xpt:275, ypt:175, xl:25, yl:25},


  ]
];
var HAZARDS = [[
  {xpt:0, ypt:150,xl:25,yl:25 },
  {xpt:25, ypt:150,xl:25,yl:25 },
  {xpt:25, ypt:175,xl:25,yl:25 },
  {xpt:0, ypt:175,xl:25,yl:25 }
],
[
{xpt:0, ypt:200, xl:25, yl:25},
  {xpt:0, ypt:225, xl:25, yl:25},
  {xpt:0, ypt:250, xl:25, yl:25},
  {xpt:0, ypt:275, xl:25, yl:25},
  {xpt:25, ypt:225, xl:25, yl:25},
  {xpt:25, ypt:250, xl:25, yl:25},
  {xpt:25, ypt:275, xl:25, yl:25},
  {xpt:50, ypt:250, xl:25, yl:25},
  {xpt:50, ypt:275, xl:25, yl:25},
  {xpt:75, ypt:275, xl:25, yl:25},
  {xpt:175, ypt:75, xl:25, yl:25},
  {xpt:175, ypt:100, xl:25, yl:25},
  {xpt:175, ypt:125, xl:25, yl:25},
  {xpt:175, ypt:150, xl:25, yl:25},
  {xpt:175, ypt:175, xl:25, yl:25},
  {xpt:175, ypt:200, xl:25, yl:25},
  {xpt:175, ypt:225, xl:25, yl:25},
  {xpt:175, ypt:250, xl:25, yl:25},
  {xpt:175, ypt:275, xl:25, yl:25},
  {xpt:400, ypt:125, xl:25, yl:25},
  {xpt:400, ypt:150, xl:25, yl:25},
  {xpt:400, ypt:175, xl:25, yl:25},
  {xpt:400, ypt:200, xl:25, yl:25},
  {xpt:400, ypt:225, xl:25, yl:25},
  {xpt:400, ypt:275, xl:25, yl:25},
  {xpt:400, ypt:300, xl:25, yl:25},
  {xpt:400, ypt:250, xl:25, yl:25},


]
]
var TUNA = [[
  {xpt:400, ypt:50, xl:25, yl: 25, collected: false}
],
[{xpt:0,ypt:150,xl:25,yl:25},
{xpt:300, ypt:100, xl:25, yl:25},
]
]

var TEMPPLATFORMS = [
  {xpt: 0, ypt: 0, xl: 0, yl: 0}
];

var END =[
  [{xpt:574,ypt:274 , xl:25 , yl: 25}],
  [{xpt:574,ypt:274 , xl:25 , yl: 25}]
];
