class Bomber extends Base {
    constructor(x, y, index) {
        super(x, y, index);
        if (exan == "ՁՄԵՌ" || exan == "ԳԱՐՈՒՆ") {
            this.energ = 6;
        }
        else {
            this.energ = 0;
        }



    }

    mul() {

    }


    chooseCellmul(character, character1, character2, character3, character4, character5) {
        this.getNewCoordinates1();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3 || matrix[y][x] == character4 || matrix[y][x] == character5) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
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
            this.eat();
        }

    }
    die() {

        for (var i in bomberArr) {
            if (this.x == bomberArr[i].x && this.y == bomberArr[i].y) {
                matrix[this.y][this.x] = 0;
                bomberArr.splice(i, 1);
                break;
            }
        }
    }

    eat() {


        var emptyCells = this.chooseCellmul(0, 1, 2, 3, 5, 6);


        //console.log(emptyCells);
        if (emptyCells.length > 0) {
            //  console.log("dasd");
            for (var i in emptyCells) {
                var newX = emptyCells[i][0];
                var newY = emptyCells[i][1];


                //var newX = emptyCells[i][0];
                //var newY = emptyCells[i][1];



                if (matrix[newY][newX] == 1) {
                    //console.log(matrix[newY][newX])
                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            matrix[newY][newX] = 0;
                            grassArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 2) {
                    // console.log(matrix[newY][newX])
                    for (var i in xotakerArr) {
                        if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                            matrix[newY][newX] = 0;
                            xotakerArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 3) {
                    // console.log(matrix[newY][newX])
                    for (var i in gishatichArr) {
                        if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                            matrix[newY][newX] = 0;
                            gishatichArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 5) {
                    //console.log(matrix[newY][newX]);
                    for (var i in hunterArr) {
                        if (newX == hunterArr[i].x && newY == hunterArr[i].y) {
                            matrix[newY][newX] = 0;
                            hunterArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 6) {
                    // console.log(5555);
                    for (var i in dinoArr) {
                        if (newX == dinoArr[i].x && newY == dinoArr[i].y) {
                            matrix[newY][newX] = 0;
                            dinoArr.splice(i, 1);
                        }
                    }
                }


                matrix[newY][newX] = 0;
                // matrix[newY][newX] = this.index;


                // this.x = newX;
                // this.y = newY;
                //this.energ++;
            }
        }
        else {
            this.move();
        }
    }
}