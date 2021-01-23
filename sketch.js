var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

var Car1, Car2 , Car3, Car4, track;

var car1, car2, car3, car4, cars;

function preload(){

Car1 = loadImage("images/car1.png");
Car2 = loadImage("images/car2.png");
Car3 = loadImage("images/car3.png");
Car4 = loadImage("images/car4.png");
track = loadImage("images/track.jpg");
track1 = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-140);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){

    game.update(1);
}

  if(gameState === 1){

    clear();
    game.play();
  }

}
