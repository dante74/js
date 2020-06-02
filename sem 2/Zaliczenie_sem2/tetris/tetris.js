"use strict";

const board = require('./board');
const boardGo = require('./boardGo');


const game = new boardGo(board);
console.clear()
//game.startBall();
//game.go();
for (let i = 0; i < 100; i++) {
  console.clear()
  game.update();
  game.stop();
  game.sleep(1000);
}

