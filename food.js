function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

class Food {
    constructor() {
        this.x = getRandomIntInclusive(0, 19);
        this.y = getRandomIntInclusive(0, 19);
        this.cellsize = 25;
    }

    draw(canvas) {
        canvas.fillStyle = "aqua";
        canvas.fillRect(this.x * this.cellsize, this.y * this.cellsize, this.cellsize, this.cellsize);
    }

    changeLocation(snake) {
        this.x = getRandomIntInclusive(0, 19);
        this.y = getRandomIntInclusive(0, 19);
        for(let i = 0; i < snake.body.length; i++) {
            if (snake.body[i].x === this.x && snake.body[i].y === this.y) {
               this.changeLocation(snake);
            }
        }
    }
}