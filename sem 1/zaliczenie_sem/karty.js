//let example = require("./examples");

const colors = {
  0: "trefl",
  1: "pik",
  2: "karo",
  3: "kier"
};
const figure = {
  0: "2",
  1: "3",
  2: "4",
  3: "5",
  4: "6",
  5: "7",
  6: "8",
  7: "9",
  8: "10",
  9: "Walet",
  10: "Dama",
  11: "Król",
  12: "As"
};

const result = []; //    Tablica przechowująca wyniki losowania
let tabMyCards = []; //  Tablica przechowująca moje wylosowane karty
const ob_keys_arr = []; //tablica kluczy obiektu
const ob = {}; //obiekt - ile czego
let color = false;
let strit = false;

//----------------------------------------------------------------------------

const lottery = function(howMany) {
  const outcomeLottery = Math.floor(Math.random() * howMany);
  for (let i = 0; i < result.length; i++) {
    if (outcomeLottery === result[i]) {
      return lottery(howMany);
    }
  }
  result.push(outcomeLottery);
};
//-----------------------------------------------------------------------------

function compareNr(a, b) {
  //sortowanie wylosowanych kart
  return b - a;
}

//------------------------------------------------------------------

const myCards = function() {
  for (let a = 0; a < 5; a++) {
    const cart = {};
    cart.weight = Math.floor(result[a] / 4);
    cart.desc = figure[cart.weight];
    cart.color = colors[result[a] % 4];
    tabMyCards.push(cart);
  }
  console.log("Wylosowano następujące karty : ");
  tabMyCards.forEach(elem => console.table(`${elem.desc} : ${elem.color}`));
  console.log("\n");
};
//-----------------------------

//examples
const examples = function() {
  tabMyCards = [...example];
  console.log("Wylosowano następujące karty : ");
  tabMyCards.forEach(elem => console.table(`${elem.desc} : ${elem.color}`));
  console.log("\n");
};
//--------------------------------
//sprawdzamy ile czego

function howWhat() {
  tabMyCards.forEach(function(el) {
    let elem = el.weight;
    if (!ob[elem]) {
      ob[elem] = 0;
    }
    ob[elem]++;
  });

  for (let key in ob) {
    ob_keys_arr.push(ob[key]);
  }
  ob_keys_arr.sort(compareNr);
  //console.log("ob_keys_arr : ", ob_keys_arr);
  //console.log("ob : ", ob);
}

function read_figure(a, b) {
  for (let key in ob) {
    if (ob[key] === a || ob[key] === b) {
      console.log(figure[key]);
    }
  }
}

function checkStritColor() {
  if (
    (tabMyCards[0].desc == "As" &&
      tabMyCards[1].desc == "5" &&
      tabMyCards[2].desc == "4" &&
      tabMyCards[3].desc == "3" &&
      tabMyCards[4].desc == "2") ||
    (tabMyCards[0].weight - 1 === tabMyCards[1].weight &&
      tabMyCards[1].weight - 1 === tabMyCards[2].weight &&
      tabMyCards[2].weight - 1 === tabMyCards[3].weight &&
      tabMyCards[3].weight - 1 === tabMyCards[4].weight)
  )
    strit = true;

  if (
    tabMyCards[0].color === tabMyCards[1].color &&
    tabMyCards[1].color === tabMyCards[2].color &&
    tabMyCards[2].color === tabMyCards[3].color &&
    tabMyCards[3].color === tabMyCards[4].color
  )
    color = true;
}

const spr = function() {
  switch (ob_keys_arr.length) {
    case 4:
      console.log("Masz parę");
      read_figure(2);
      break;
    case 3:
      if (ob_keys_arr[0] === 3) {
        console.log("Masz trójkę");
        read_figure(3);
      } else {
        console.log("Masz 2 pary");
        read_figure(2, 2);
      }
      break;
    case 2:
      if (ob_keys_arr[0] === 4) {
        console.log("Masz czwórkę (karetę)");
        read_figure(4);
      } else {
        console.log("Masz fula");
        read_figure(3);
        read_figure(2);
      }
      break;
    default: {
      checkStritColor();
      if (strit === true && color === true) {
        console.log("Masz pokera", tabMyCards[0].color);
        break;
      }
      if (strit === true) {
        console.log("Masz strita");
        break;
      }

      if (color === true) {
        console.log("Masz kolor ", tabMyCards[0].color);
        break;
      }
      console.log(
        `Najwyższa karta w Twoim rozdaniu to  ${tabMyCards[0].desc} ${tabMyCards[0].color} `
      );
    }
  }
};

//-----------------------------------------------------------

for (let i = 0; i < 5; i++) {
  lottery(52);
}

result.sort(compareNr);
myCards();
//examples();
howWhat();
spr();
