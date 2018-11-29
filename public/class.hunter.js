class Hunter extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.energ = 3;
        this.index = index;


    }
    huntermove() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newhunter = new Hunter(newX, newY, this.index);
            hunterArr.push(newhunter);
            this.die();

        }
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2]




        ];
    }

    chooseCell(character, character2) {
        this.getNewCoordinates();
        return super.chooseCell(character, character2);
    }

    move() {




        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;

        }
        // this.energ++;
        if (this.energ <= 0) {
            this.die();
            this.huntermove();

        }

    }
    die() {

        for (var i in hunterArr) {
            if (this.x == hunterArr[i].x && this.y == hunterArr[i].y) {
                matrix[this.y][this.x] = 0;
                hunterArr.splice(i, 1);
                //console.log("mnerav");
                break;
            }
        }

        // this.huntermove();
    }

    eat() {

        var emptyCells = this.chooseCell(3);

        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];


            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    //console.log("ads");

                    gishatichArr.splice(i, 1);
                }
            }

            matrix[newY][newX] = 0;
            matrix[this.y][this.x] = this.index;


            this.energ--;
            //console.log(this.energ);
            if (this.energ <= 0) {
                this.huntermove();
            }

        }

    }

}