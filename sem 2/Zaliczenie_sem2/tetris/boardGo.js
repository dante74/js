class boardGo {
    constructor(board) {
        this.board = board;
        this.boardY = this.board.length;
        this.boardX = this.board[0].length;
        this.centerX = 0;
        this.centerY = 0;
        this.speedX = 1;
        this.speedY = 1;
        this.startX;
        this.startY;
        this.next = [];
        this.startBall();
    }
    //------------------------------
    startBall() {

        //---------------
        for (let i = 0; i < this.board.length; i++) {
            this.centerX = this.board[i].indexOf("1");
            if (this.centerX > -1) {
                this.centerY = i;
                this.startX = this.centerX;
                this.startY = this.centerY;
                return;
            }
        }
        this.go();
    }
    //-------------------------------
    draw() {
        let str = "";
        for (const subTab of this.next) {
            for (const el of subTab) {
                switch (el) {
                    case "0":
                        str += "  ";
                        break;
                    case "1":
                        str += "▓▓";
                        break;
                    case "X":
                        str += "░░";
                        break;
                    case "Y":
                        str += "BB";
                        break;
                }
            }

            str += "\n";
        }
        console.log(str);

    }
    go() {

        this.centerX += this.speedX;
        this.centerY += this.speedY;
        this.next = JSON.parse(JSON.stringify(this.board));
        this.next[this.centerY][this.centerX] = "1";
    }


    update() {
        this.draw();
        console.log("");

        let nextStepX = this.centerX + this.speedX;
        let nextStepY = this.centerY + this.speedY;

        //----------------------
        if (this.board[this.centerY][this.centerX] === "Y") {
            let rand = Math.floor(Math.random() * (3 + 1));
            switch (rand) {
                case 0: this.speedX = -this.speedX; break;
                case 1: this.speedY = -this.speedY; break;
                case 2: this.speedX = -this.speedX; this.speedY = -this.speedY; break;
                case 3: this.speedX = this.speedX;
            }
        }
        //------------------------
        if (
            this.board[nextStepY][this.centerX] === "X" && //corner
            this.board[this.centerY][nextStepX] === "X"
        ) {
            this.speedY = -this.speedY;
            this.speedX = -this.speedX;
            this.go();
            return;
        }

        if (this.board[this.centerY][nextStepX] === "X") {
            this.speedX = -this.speedX;
            this.go();
            return;
        } else if (
            this.board[nextStepY][nextStepX] === "X" &&
            this.board[nextStepY][this.centerX] != "X"
        ) {
            this.speedY = -this.speedY;
            this.speedX = -this.speedX;

            this.go();
            return;
        }
        if (this.board[nextStepY][this.centerX] === "X") {
            this.speedY = -this.speedY;
            this.go();
            return;
        } else if (this.board[nextStepY][nextStepX] === "X") {
            this.speedY = -this.speedY;
            this.speedX = -this.speedX;
            this.go();
            return;
        }

        this.go();
    }
    stop() {

        if (this.startX === this.centerX && this.startY === this.centerY) process.exit();
    }
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}

module.exports = boardGo;