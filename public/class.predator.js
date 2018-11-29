class Gishatich extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;


    }


    chooseCell(c) {
        this.getNewCoordinates();
        return super.chooseCell(c);
    }
    move() {
        var emptyCells = this.chooseCell(0);
        //console.log(emptyCells);
        var newCell = random(emptyCells);
        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;
            this.energy--;
        }
    }
    mul() {

        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var empty = this.chooseCell(3);
        for (var i in empty) {
            for (var l in gishatichArr) {
                if (gishatichArr[l].y == empty[i][1] && gishatichArr[l].x == empty[i][0]) {

                    if (gishatichArr[l].gender == g) {

                        var gax = []
                        gax.push(gishatichArr[l])
                        for (var k in gax) {
                            if (gax[k].energy >= 10) {
                                //console.log(55);
                                var emptyCells = this.chooseCell(0);
                                var newCell = random(emptyCells);

                                // console.log(emptyCells);
                                if (newCell) {
                                    var newX = newCell[0];
                                    var newY = newCell[1];
                                    matrix[newY][newX] = this.index;

                                    var gt = new Gishatich(newX, newY, this.index);
                                    gishatichArr.push(gt);
                                    this.energy = 6;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    eat() {
        if (exan == "ՁՄԵՌ") {
            var mp1 = 8;
        }
        if (exan == "ԳԱՐՈՒՆ") {
            var mp1 = 2;

        }
        else if (exan == "ԱՄԱՌ") {
            var mp1 = 5;
        }
        else if (exan == "ԱՇՈՒՆ") {
            var mp1 = 7;
        }
        this.getNewCoordinates();
        var gishatichCells = this.chooseCell(2);
        var newCell = random(gishatichCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;


            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];
            for (var i in xotakerArr) {

                if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }


            this.energy++;
        }
        else {
            this.move();

        }
        if (this.energy >= mp1) {
            this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
        // console.log(this.energy);
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