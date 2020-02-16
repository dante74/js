//////////////////////////  zad 1 /////////////////////////////////////////////

// var arr = [];
// var x = 0;

// function isPrime(num) {
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }

// for (var i = 0; i < 100; i++) {
//   if (isPrime(i)) {
//     arr.push(i);
//   }
// }

// console.log(arr);
// console.log(arr.length);

//////////////////////////  zad 2 /////////////////////////////////////////////

// var readline = require("readline-sync");

// class Game {
//   constructor(sub) {
//     this.numberOfTries = 0;
//     this.numberOfLottery = Math.floor(Math.random() * sub);
//   }
//   quess() {
//     let prevNumber = 0;

//     while (true) {
//       let num = readline.question("Jaki numer zostal wylosowany ??  : ");
//       if (num == this.numberOfLottery) {
//         console.log(`Brawo - wylosowana liczba to ${num}`);
//         console.log(`Zgadywales(as) ${this.numberOfTries} razy`);
//         break;
//       } else if (num > this.numberOfLottery) {
//         console.log("Podales(as) zbyt duza liczbe");
//         if (num !== prevNumber) this.numberOfTries += 1;
//       } else {
//         console.log("Podales(as) zbyt mala liczbe");
//         if (num !== prevNumber) this.numberOfTries += 1;
//       }
//     }
//   }
// }
// const game = new Game(100);
// game.quess();

//////////////////////////  zad 2a /////////////////////////////////////////////

// class Game {
//   constructor(sub) {
//     this.numberOfTries = 0;
//     this.numberOfLottery = Math.floor(Math.random() * sub);
//   }
//   quess(max) {
//     console.log(` Wylosowana liczba to : ${this.numberOfLottery}`);
//     let prevNumber = 0;
//     let min = 0;
//     let num = Math.floor(Math.random() * max);
//     while (true) {
//       if (num === this.numberOfLottery) {
//         console.log(`Brawo - wylosowana liczba to ${num}`);
//         console.log(`Zgadywales(as) ${this.numberOfTries + 1} razy`);
//         break;
//       }
//       if (num > this.numberOfLottery) {
//         console.log(` ${num} Podales(as) zbyt duza liczbe`);
//         if (num !== prevNumber) {
//           this.numberOfTries += 1;
//           max = num;
//           prevNumber = num;
//         }
//         num = Math.floor(Math.random() * (max - min)) + min;
//       }
//       if (num < this.numberOfLottery) {
//         console.log(` ${num} Podales(as) zbyt mala liczbe `);
//         if (num !== prevNumber) {
//           this.numberOfTries += 1;
//           min = num;
//           prevNumber = num;
//         }
//         num = Math.floor(Math.random() * (max - min)) + min;
//       }
//     }
//   }
// }
// const game = new Game(100);
// game.quess(100);

//////////////////////////  zad 3 /////////////////////////////////////////////
// var readline = require("readline-sync");

// class List {
//   constructor(num, rotate) {
//     this.elements = num;
//     this.rotatesElement = rotate;
//   }
//   listOfElements() {
//     let table = [];
//     for (let i = 0; i < this.elements; i++) table.push(i + 1);
//     table.splice(0, this.rotatesElement).forEach(el => table.push(el));
//     console.log(table);
//   }
// }

// let num = readline.question("Z ilu elementow ma sie skladac lista  ??  : ");
// let rot = readline.question("Jaka będzie rotacja ??  : ");
// const table = new List(num, rot);
// table.listOfElements();

//////////////////////////  zad 4 /////////////////////////////////////////////

// class Fibonacci {
//   constructor(n) {
//     this.fibonacciNumbers = n - 2;
//   }
//   list() {
//     let tab = [1, 1];
//     for (let i = 2; i < this.fibonacciNumbers; i++)
//       tab.push(tab[i - 2] + tab[i - 1]);
//     console.log(`Fibonacci list : ${tab}`);
//   }
// }
// const list = new Fibonacci(20);
// list.list();

//////////////////////////  zad 5 /////////////////////////////////////////////

// class NumbersToTable {
//   constructor(data) {
//     this.data = data;
//     this.table = [];
//   }

//   itsString() {
//     let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let el of this.data) {
//       if (el in numbers) this.table.push(el);
//     }
//     console.log(this.table);
//   }
//   check() {
//     if (typeof this.data !== "string") {
//       this.data = this.data.toString();
//     }
//   }
// }

// const table = new NumbersToTable(12345);
// table.check();
// table.itsString();

//////////////////////////  zad 6 /////////////////////////////////////////////

// class Translator {
//   constructor() {}

//   translateToPig(data) {
//     let translatet = "";
//     let temp = data.split(" ");

//     temp.forEach(element => {
//       element = Array.from(element);
//       if (element.length == 1) {
//         translatet = translatet + element + "ay" + " ";
//       } else {
//         let el = element.splice(0, 1);
//         element = element.join("") + el + "ay";
//         translatet = translatet + element + " ";
//       }
//     });
//     console.log(`Translate to Pig language : ${translatet}`);
//   }
//   translateFromPig(data) {
//     let translatet = "";
//     let temp = data.split(" ");

//     temp.forEach(element => {
//       element = Array.from(element);
//       element.splice(-2, 2);
//       let el = element.splice(-1, 1);
//       element = el + element.join("");
//       translatet = translatet + element + " ";
//     });
//     console.log(`Translate from Pig language : ${translatet}`);
//   }
// }

// const translate = new Translator();
// translate.translateToPig("Ala ma kotka i pieska");
// translate.translateFromPig("laAay amay otkakay iay ieskapay");
