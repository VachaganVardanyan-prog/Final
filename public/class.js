class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}
class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energ = 8;
        this.index = index;


    }
    mu() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newXotaker = new Xotaker(newX, newY, this.index);
            xotakerArr.push(newXotaker);
            this.energ = 6;
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
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
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
        }

    }
    die() {

        for (var i in xotakerArr) {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                matrix[this.y][this.x] = 0;
                xotakerArr.splice(i, 1);
                break;
            }
        }
    }

    eat() {


        var emptyCells = this.chooseCell(1);

        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    grassArr.splice(i, 1);
                }
            }
            this.x = newX;
            this.y = newY;
            this.energ++;
            if (this.energ >= 10) {
                this.mu();
            }
        }
        else {
            this.move();
        }
    }
}

class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.index = index;

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
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(c) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == c) {
                    found.push([x, y]);
                }
            }
        }
        return found;
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
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newGishatich);
            this.energy = 7;
        }
    }
    eat() {
        this.getNewCoordinates();
        var gishatichCells = this.chooseCell(2);
        var newCell = random(gishatichCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;


            matrix[newCell[1]][newCell[0]] = 3;

            for (var i in xotakerArr) {

                if (newCell[0] == xotakerArr[i].x && newCell[1] == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy++;
        }
        else {
            this.move();

        }
        if (this.energy >= 7) {
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
class Hunter {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energ = 3;
        this.index = index;


    }
    mull() {
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    move() {




        // var emptyCells = this.chooseCell(0);
        // var newCell = random(emptyCells);

        // //console.log(emptyCells);
        // if (newCell) {
        //     var newX = newCell[0];
        //     var newY = newCell[1];
        //     matrix[this.y][this.x] = 0;
        //     matrix[newY][newX] = this.index;
        //     this.x = newX;
        //     this.y = newY;

        // }
        // // this.energ++;
        // if (this.energ <= 0) {
        //     this.die();
        //     this.mull();

        // }

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

        // this.mull();
    }

    eat() {

        var emptyCells = this.chooseCell(3);

        var newCell = random(emptyCells);

        //console.log(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            var oldX = this.x;
            var oldY = this.y;

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
            console.log(this.energ);
            if (this.energ <= 0) {
                this.mull();
            }
        }
        else {
            this.move();
        }
    }

}





class Bomber {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energ = 8;
        this.index = index;


    }

    mul() {
        // var emptyCells = this.chooseCell(0);
        // var newCell = random(emptyCells);

        // //console.log(emptyCells);
        // if (newCell) {
        //     var newX = newCell[0];
        //     var newY = newCell[1];
        //     matrix[newY][newX] = this.index;

        //     var newXotaker = new Xotaker(newX, newY, this.index);
        //     xotakerArr.push(newXotaker);
        //     this.energ = 6;
        // }
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
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character, character1, character2, character3, character4) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3 || matrix[y][x] == character4) {
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


        var emptyCells = this.chooseCell(0, 1, 2, 3, 5);


        //console.log(emptyCells);
        if (emptyCells.length > 0) {
            console.log("dasd");
            for (var i in emptyCells) {
                var newX = emptyCells[i][0];
                var newY = emptyCells[i][1];


                //var newX = emptyCells[i][0];
                //var newY = emptyCells[i][1];



                if (matrix[newY][newX] == 1) {
                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            matrix[newY][newX] = 0;
                            grassArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 2) {
                    for (var i in xotakerArr) {
                        if (newX == xotakerArr[i].x && newY == xotakerArr[i].y) {
                            matrix[newY][newX] = 0;
                            xotakerArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 3) {
                    for (var i in gishatichArr) {
                        if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                            matrix[newY][newX] = 0;
                            gishatichArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[newY][newX] == 5) {
                    for (var i in hunterArr) {
                        if (newX == hunterArr[i].x && newY == hunterArr[i].y) {
                            matrix[newY][newX] = 0;
                            hunterArr.splice(i, 1);
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



