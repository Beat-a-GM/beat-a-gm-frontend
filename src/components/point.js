export default class Point {

    points = 0;

    constructor(points) {
        this.points = points;
    }

    addPoint(point) {
        this.points += point;
    }

    // function to compare user's move to GM and StockFish's move
    compareMoves(userMove, gmMove, stockFishMove) {
        if (userMove === gmMove) {
            console.log("happened")
            this.addPoint(50);
        }
        if (userMove === stockFishMove) {
            console.log("happened")
            this.addPoint(75);
        }
    }

    // function to display points
    displayPoints() {
        return this.points;
    }


}