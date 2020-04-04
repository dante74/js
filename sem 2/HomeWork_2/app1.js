"use strict";

//=============================== ZAD 4 ==================================================
// class Matrix {
//   constructor(taba, tabb) {
//     this.taba = taba;
//     this.tabb = tabb;
//     this.rowa = this.taba.length;
//     this.cola = this.taba[0].length;
//     this.rowb = this.tabb.length;
//     this.colb = this.tabb[0].length;
//   }

//   isOk() {
//     if (this.cola === this.rowb) {
//       return true; //pierwsza tyle kolumn co druga wierszy
//     } else {
//       return false;
//     }
//   }

//   view(row, col, tab) {
//     let views = "";
//     for (var i = 0; i < row; i++) {
//       for (var j = 0; j < col; j++) {
//         views += tab[i][j] + " || ";
//       }
//       console.log(views);
//       views = "";
//     }
//   }

//   multi() {
//     let a = 0;
//     let row = [];
//     let multi = [];

//     for (let z = 0; z < this.rowa; z++) {
//       for (let j = 0; j < this.colb; j++) {
//         a = 0;
//         for (let i = 0; i < this.cola; i++) {
//           a += taba[z][i] * tabb[i][j];
//         }
//         row.push(a);
//       }
//       multi.push(row);
//       row = [];
//     }
//     return multi;
//   }

//   go() {
//     if (this.isOk()) {
//       this.view(this.rowa, this.cola, this.taba);
//       console.log("###################################");
//       this.view(this.rowb, this.colb, this.tabb);
//       return this.multi();
//     } else {
//       return console.log("The matrices are not the right size");
//     }
//   }
// }

// const taba = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 8, 7, 6]
// ];
// const tabb = [
//   [1, 2, 1, 2, 1, 2],
//   [1, 2, 1, 3, 1, 3],
//   [1, 2, 1, 2, 3, 1],
//   [1, 2, 1, 2, 1, 1]
// ];

// const result = new Matrix(taba, tabb);
// let multi = result.go();

// multi.forEach(element => {
//   console.log(element);
// });

//https://obliczone.pl/kalkulatory/mnozenie-macierzy
// 1,2,3,4
// 5,6,7,8
// 9,8,7,6

// 1,2,1,2,1,2
// 1,2,1,3,1,3
// 1,2,1,2,3,1
// 1,2,1,2,1,1

//=============================== ZAD 3 ==================================================

class FindPiecesOfWord {
  constructor(wordA, wordB) {
    this.wordA = wordA;
    this.wordB = wordB;
  }

  check(aa, bb) {
    if (aa.indexOf(bb) > -1) {
      return true;
    } else {
      return false;
    }
  }

  go() {
    let splits = "";
    let pop = "";

    for (let i = 0; i < this.wordB.length; i++) {
      splits += this.wordB[i];
      if (!this.check(this.wordA, splits)) {
        splits = "";
      } else {
        if (pop.length < splits.length) {
          pop = splits;
        }
      }
    }
    return pop;
  }
}

const take = new FindPiecesOfWord("ala", "alkala");
console.log(take.go());
