class Xotaker extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energ = 10;
        this.gender = Math.round(Math.random())



    }

    mu() {

        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var empty = this.chooseCell(2);
        for (var i in empty) {
            for (var l in xotakerArr) {
                if (xotakerArr[l].y == empty[i][1] && xotakerArr[l].x == empty[i][0]) {

                    if (xotakerArr[l].gender == g) {

                        var bax = []
                        bax.push(xotakerArr[l])
                        for (var k in bax) {
                            if (bax[k].energ >= 4) {
                                //console.log(55);
                                var emptyCells = this.chooseCell(0);
                                var newCell = random(emptyCells);

                                // console.log(emptyCells);
                                if (newCell) {
                                    var newX = newCell[0];
                                    var newY = newCell[1];
                                    matrix[newY][newX] = this.index;

                                    var newXotaker = new Xotaker(newX, newY, this.index);
                                    xotakerArr.push(newXotaker);
                                    this.energ = 6;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    // var emptyCells = this.chooseCell(0);
    //                     var newCell = random(emptyCells);

    //                     // console.log(emptyCells);
    //                     if (newCell) {
    //                         var newX = newCell[0];
    //                         var newY = newCell[1];
    //                         matrix[newY][newX] = this.index;

    //                         var newXotaker = new Xotaker(newX, newY, this.index);
    //                         xotakerArr.push(newXotaker);
    //                         this.energ = 6;
    //                     }


    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
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
        this.energ--;
        if (this.energ <= 0) {
            this.die();
        }

    }
    die() {

        /* for (var i in xotakerArr) {
             if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                 matrix[this.y][this.x] = 0;
                 xotakerArr.splice(i, 1);
                 break;
             }
         }
         */
    }

    eat() {
        //console.log(this.gender);
        if (exan == "ԳԱՐՈՒՆ") {
            var mp = 5;

        }
        else if (exan == "ԱՄԱՌ") {
            var mp = 10;
        }
        else {
            var mp = 7;
        }
        var emptyCells = this.chooseCell(1);

        // console.log(emptyCells)
        //noLoop()

        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.x = newX;
            this.y = newY;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energ++;
            if (this.energ >= mp) {
                this.mu();
            }
            else if (this.energ <= 0) {
                this.die();
            }
        }
        else {
            this.move();
        }
    }
}
