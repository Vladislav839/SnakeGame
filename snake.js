class SnakeNode {
    constructor(x = 0, y = 0, xspeed = 1, yspeed = 0) {
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.cellsize = 25;
    }

    update() {
        this.prevX = this.x;
        this.prevY = this.y;
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
}

class Snake {
    constructor() { 
        this.body = [];
        this.body[0] = new SnakeNode();
    }

    update() {
        if (this.body.length > 1) {
            for(let i = this.body.length - 1; i >= 1; i--) {
                this.body[i] = new SnakeNode(this.body[i - 1].x, this.body[i - 1].y,0,0);
            }
        }
        this.body[0].update();
    }

    draw(canvas) {
        this.update();
        canvas.fillStyle = "#fff";
        canvas.clearRect(0, 0, 500, 500);
        canvas.fillStyle = "black";
        for(let item of this.body) {
            canvas.fillRect(item.x * item.cellsize,  item.y * item.cellsize, item.cellsize, item.cellsize);
        }
    }

    eat(food, canvas) {
        if(this.body[0].x === food.x && this.body[0].y === food.y) {
            this.body.push(new SnakeNode(0,0,0,0));
            Game.stats++;
            food.changeLocation(this);
        }
    }

    gameOver() {
        if  (this.body[0].x === 20 || this.body[0].y === 20 || this.body[0].x < 0 || this.body[0].y < 0) {
            this.body[0].xspeed = 0;
            this.body[0].yspeed = 0;
            document.location.reload(true);
        }

        for(let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y) {
                this.body[0].xspeed = 0;
                this.body[0].yspeed = 0;
                document.location.reload(true);
            }
        }
    }
    
}
