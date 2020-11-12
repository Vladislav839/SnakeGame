class Field{
    constructor(size) {
        this.cellsize = 25;
        this.width = size;
        this.heigth = size;
        this.grid = new Array(this.width);
        for (let x = 0; x < this.grid.length; x++) {
            this.grid[x] = new Array(this.heigth);
        }
    }

    drawGrid(canvas) {
        for (let i = 1; i < this.width - 1; i++) {
            canvas.beginPath();
            canvas.moveTo(i * this.cellsize, 0);
            canvas.lineTo(i * this.cellsize, this.heigth);
            canvas.lineWidth = 2;
            canvas.closePath();
            canvas.stroke();
        }

        for (let i = 1; i < this.heigth - 1; i++) {
            canvas.beginPath();
            canvas.moveTo(0, i * this.cellsize);
            canvas.lineTo(this.width, i * this.cellsize);
            canvas.lineWidth = 2;
            canvas.closePath();
            canvas.stroke();
        }
    }
}