class Game {
    static gameOver = false;
    static stats = 0;
    static start() {
        const canvas = document.getElementById("canvas").getContext("2d");
        const field = new Field(500);
        field.drawGrid(canvas);

        const snake = new Snake();

        const handler = function(event) {
            switch(event.which) {
                case 37:
                    snake.body[0].xspeed = -1;
                    snake.body[0].yspeed = 0;
                    break;
                case 38:
                    snake.body[0].xspeed = 0;
                    snake.body[0].yspeed = -1;
                    break;
                case 39:
                    snake.body[0].xspeed = 1;
                    snake.body[0].yspeed = 0;
                    break;
                case 40:
                    snake.body[0].xspeed = 0;
                    snake.body[0].yspeed = 1;
            }
        }

        let food = new Food();
        food.draw(canvas);

        document.addEventListener("keydown", handler)

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            document.getElementById('up').addEventListener("click", (e) => {
                snake.body[0].xspeed = 0;
                snake.body[0].yspeed = -1;
            })
    
            document.getElementById('left').addEventListener('click', (e) => {
                snake.body[0].xspeed = -1;
                snake.body[0].yspeed = 0;
            })
    
            document.getElementById('right').addEventListener('click', (e) => {
                snake.body[0].xspeed = 1;
                snake.body[0].yspeed = 0;
            })
    
            document.getElementById('down').addEventListener('click', (e) => {
                snake.body[0].xspeed = 0;
                snake.body[0].yspeed = 1;
            })
        }

        setInterval(() => {
                snake.gameOver();
                snake.draw(canvas);
                snake.eat(food, canvas);
                food.draw(canvas);
                field.drawGrid(canvas);
        }, 200);

    }

}