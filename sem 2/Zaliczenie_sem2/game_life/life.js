const board = [
  [0, 1, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
];
//-----------------------------------
let game;

function setup() {
  game = new Life(board, 40);
  createCanvas(game.columns * game.w, game.rows * game.w);
  frameRate(0.5);
  game.first();
}

function draw() {
  background(255);

  for (let i = 0; i < game.rows; i++) {
    for (let j = 0; j < game.columns; j++) {
      if (game.board[i][j] == 1) fill(0);
      else fill(255);
      stroke(0);
      rect(j * game.w, i * game.w, game.w - 1, game.w - 1);
    }
  }
  game.generate();
}

//------------------------------------

class Life {
  constructor(board, w) {
    this.board = board;
    this.columns = this.board[0].length;
    this.rows = this.board.length;
    this.next = [];
    this.w = w;
  }
  first() {
    for (let i = 0; i < this.rows; i++) {
      this.next[i] = [];
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.next[i][j] = 0;
      }
    }
  }
  generate() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        let neighbors = 0;

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {

            //up
            if (y == 0 && i == -1) continue;
            //down
            if (y == this.rows - 1 && i == 1) continue;
            //left
            if (x == 0 && j == -1) continue;
            //right
            if (x == this.columns - 1 && j == 1) continue;
            //--------
            neighbors += this.board[y + i][x + j];
          }
        }
        neighbors -= this.board[y][x];
        // Rules of Life
        if (this.board[y][x] == 1 && neighbors < 2) this.next[y][x] = 0;
        // Loneliness
        else if (this.board[y][x] == 1 && neighbors > 3) this.next[y][x] = 0;
        // Overpopulation
        else if (this.board[y][x] == 0 && neighbors == 3) this.next[y][x] = 1;
        // Reproduction
        else this.next[y][x] = this.board[y][x]; // Stasis;
      }
    }

    // Swap!
    let temp = this.board;
    this.board = this.next;
    this.next = temp;
  }
}


