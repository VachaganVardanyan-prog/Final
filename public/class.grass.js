class Grass extends Base {
    constructor(x, y, index) {
        super(x, y, index)

    }

    mul(ar) {
        this.multiply += ar;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        //console.log(grassArr)
        //console.log(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            // console.log(this.index)
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }





}