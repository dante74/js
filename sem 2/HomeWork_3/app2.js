//***********************ZAD 1 ************ */

const treasureMap = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];
//-------------------------------------------
const TreasureIsland = class {
  constructor(treasureMap) {
    this.treasureMap = treasureMap;
  }

  inCell(x, y) {
    return this.treasureMap[x - 1][y - 1];
  }
};
//------------------------------------------
const Hunter = class {
  constructor(x = 1, y = 1) {
    this.x = x;
    this.y = y;
    this.island = null;
  }

  whatIsInCell(x, y) {
    let number = this.island.inCell(x, y);
    this.x = Math.floor(number / 10);
    this.y = number % 10;

    if (this.x === x && this.y === y) {
      console.log("Treasure is find");
    } else {
      console.log(number);
      this.whatIsInCell(this.x, this.y);
    }
  }

  findTreasure() {
    if (this.island === null) {
      console.log("No map");
    } else {
      console.log(`${this.x}` + `${this.y}`);
      this.whatIsInCell(this.x, this.y);
    }
  }
};

//-----------------------------------------
const Cuba = new TreasureIsland(treasureMap);
const Marek = new Hunter();
Marek.island = Cuba;
Marek.findTreasure();
