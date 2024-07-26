class GameView {
    constructor() {
        this.scoreElement = document.getElementById('score');
        this.timeLeftElement = document.getElementById('time_left');
        this.startButton = document.getElementById('start_game');
        this.blocks = document.querySelectorAll('.block img');
    }

    bindStartGame(handler) {
        this.startButton.addEventListener('click', handler);
    }

    bindBlockClick(handler) {
        this.blocks.forEach((block, index) => {
            block.addEventListener('click', () => handler(index));
        });
    }

    updateScore(score) {
        if (score >= 0)
            this.scoreElement.textContent = score;
    }

    updateTime(timeLeft) {
        if (timeLeft >= 0)
            this.timeLeftElement.textContent = timeLeft;
    }

    showMole(index) {
        this.blocks[index].src = 'mole.jpg';
        this.blocks[index].style.visibility = 'visible';
    }

    showSnake(index) {
        this.blocks[index].src = 'snake.jpg';
        this.blocks[index].style.visibility = 'visible';
    }

    hideBlock(index) {
        this.blocks[index].style.visibility = 'hidden';
    }
}

const view = new GameView();
