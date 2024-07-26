class GameModel {
    constructor() {
        this.resetGame();
        this.intervals = [];
        this.timeouts = [];
    }

    resetGame() {
        this.score = 0;
        this.timeLeft = 30;
        this.moles = new Array(12).fill(0);
        this.snakeIndex = -1;
    }

    randomBlock() {
        return Math.floor(Math.random() * 12);
    }

    setMole(index) {
        this.moles[index] = 1;
    }

    clearMole(index) {
        this.moles[index] = 0;
    }

    isMole(index) {
        return this.moles[index] === 1;
    }

    setSnake(index) {
        this.snakeIndex = index;
    }

    clearSnake(index) {
        if (this.snakeIndex === index) {
            this.snakeIndex = -1;
        }
    }

    isSnake(index) {
        return this.snakeIndex === index;
    }

    incrementScore() {
        this.score++;
    }

    decrementTime() {
        this.timeLeft--;
    }

    setAllSnakes() {
        for (let i = 0; i < this.moles.length; i++) {
            this.moles[i] = 2; // 2 indicates a snake
        }
    }

    addInterval(interval) {
        this.intervals.push(interval);
    }

    clearIntervals() {
        this.intervals.forEach(x => clearInterval(x));
        this.timeouts.forEach(x => clearTimeout(x));
        this.intervals = [];
        this.timeouts = [];
    }
}

const model = new GameModel();
