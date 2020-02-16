const mystery = function() {
  const balls = [0, 0, 0, 0, 0, 0, 0, 0];

  balls[Math.floor(Math.random() * 8)] = 1;

  //Pierwsze "ważenie"
  const callback = function() {
    let a = 0,
      b = 0;
    for (let i = 0; i < 3; i++) {
      a += balls[i];
      b += balls[i + 3];
    }
    return { a, b };
  };

  const look = function(callback) {
    let obj = callback();
    if (obj.a === obj.b) {
      return 3;
    } else if (obj.a > obj.b) {
      return 1;
    } else return 2;
  };

  // Koniec pierwszego "ważenia"
  // Drugie "ważenie"
  function first() {
    if (balls[0] == balls[1]) {
      return 2;
    } else if (balls[0] > balls[1]) {
      return 0;
    } else return 1;
  }

  function second() {
    if (balls[3] == balls[4]) {
      return 5;
    } else if (balls[3] > balls[4]) {
      return 3;
    } else return 4;
  }

  function third() {
    if (balls[6] > balls[7]) {
      return 6;
    } else return 7;
  }
  // Koniec drugiego "ważenia"
  //interfejs sterowania
  return {
    look: look(callback),
    first: first(),
    second: second(),
    third: third(),
    ballTable: balls
  };
};

//************Sterowanie programem *************************

const firstLook = mystery();
let result = firstLook.look;
console.log(`Wylosowany układ kul : ${firstLook.ballTable}`);
let weighestBall;
switch (result) {
  case 1:
    weighestBall = firstLook.first + 1;
    break;
  case 2:
    weighestBall = firstLook.second + 1;
    break;
  case 3:
    weighestBall = firstLook.third + 1;
}
console.log(`Najcięższa kula znajduje się na pozycji ${weighestBall}`);
