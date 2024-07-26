class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindStartGame(() => this.startGame());
        this.view.bindBlockClick((index) => this.handleBlockClick(index));
    }

    startGame() {
        this.model.resetGame();
        this.view.updateScore(this.model.score);
        this.view.updateTime(this.model.timeLeft);
        this.clearBoard();

        const timerInterval = setInterval(() => {
            this.model.decrementTime();
            this.view.updateTime(this.model.timeLeft);

            if (this.model.timeLeft < 0) {
                this.endGame();
            }
        }, 1000);

        this.model.addInterval(timerInterval);

        const moleInterval = setInterval(() => {
            const index = this.model.randomBlock();
            if (!this.model.isSnake(index)) {
                this.model.setMole(index);
                this.view.showMole(index);

                let moletimeout = setTimeout(() => {
                    this.model.clearMole(index);
                    this.view.hideBlock(index);
                }, 3000);
                this.model.timeouts.push(moletimeout);
            }
        }, 1000);

        this.model.addInterval(moleInterval);

        const snakeInterval = setInterval(() => {
            const index = this.model.randomBlock();
            this.model.setSnake(index);
            this.view.showSnake(index);

            const snaketimeout = setTimeout(() => {
                this.model.clearSnake(index);
                this.view.hideBlock(index);
            }, 2000);
            this.model.timeouts.push(snaketimeout);
        }, 2000);

        this.model.addInterval(snakeInterval);
    }

    handleBlockClick(index) {
        if (this.model.isMole(index)) {
            this.model.incrementScore();
            this.view.updateScore(this.model.score);
            this.model.clearMole(index);
            this.view.hideBlock(index);
        } else if (this.model.isSnake(index)) {
            this.endGameWithSnake();
        }
    }

    setAllSnakes() {
        this.model.setAllSnakes();
        for (let i = 0; i < this.model.moles.length; i++) {
            this.view.showSnake(i);
        }
    }

    clearBoard() {
        for (let i = 0; i < this.model.moles.length; i++) {
            this.view.hideBlock(i);
        }
    }

    endGame() {
        this.model.clearIntervals();
        this.clearBoard();
        alert('Time is Over!');
    }

    endGameWithSnake() {

        this.model.clearIntervals();
        this.setAllSnakes();
        alert('Snake! Game Over!');
    }
}

const controller = new GameController(model, view);
