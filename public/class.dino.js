
class Dino extends Base {
    constructor(x, y) {
        super(x, y);
        if (exan == "ՁՄԵՌ") {
            this.energy = 6;
        }
        else {
            this.energy = 5;
        }

        this.directions = [];
        this.index = 6;
    }





    move() {
        this.getNewCoordinates();
        var emptyCell = this.chooseCell(0);
        var newCell = random(emptyCell);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 6;
            this.energy--;

        }
        else {
            this.energy--;
        }

    }






    eat() {
        this.getNewCoordinates();
        var newCell = random(this.chooseCelldino(1, 2));
        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];

            this.energy++;

            this.x = newX;
            this.y = newY;

            if (matrix[this.y][this.x] = 1) {



                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }

                }

            }
            if (matrix[this.y][this.x] = 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                        xotakerArr.splice(i, 1);
                        break;
                    }

                }
            }
            matrix[this.y][this.x] = 6;

        }
        else if (this.energy <= -3) {
            this.die();

        }

        else {
            this.move();
        }

    }

    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }



}