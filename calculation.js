const createPathFromMap = require('./pathFactory');
const itemWithLowestScore = require('./scoringSupport');

class Calculation {

    constructor(board, startCell, endCell) {
        this.board = board;
        this.startCell = startCell;
        this.endCell = endCell;

        this.openSet = [];
        this.closedSet = [];

        this.gScore = new Map();
        this.fScore = new Map();
        this.cameFrom = new Map();
    }

    calculate() {

        function reconstructPath() {
            return createPathFromMap(this.cameFrom, this.endCell);
        }
    
        function nodeFromOpenWithLowestFScore() {
            return itemWithLowestScore(this.openSet, this.fScore);
        }

        function log() {

            function cellToString(cell) {
                if (this.openSet.includes(cell)) {
                    return "[o]";
                } else if (this.closedSet.includes(cell)) {
                    return "[c]";
                } else {
                    return "[ ]";
                }
            }
        
            this.board.log(cellToString.bind(this));
        }
    
        this.openSet.push(this.startCell);
        this.gScore.set(this.startCell, 0);
        this.fScore.set(this.startCell, this.startCell.distanceTo(this.endCell));

        while (this.openSet.length > 0) {
            let current = nodeFromOpenWithLowestFScore.call(this);

            if (current == this.endCell) {
                return reconstructPath.call(this);
            }
    
            this.openSet.splice(this.openSet.indexOf(current), 1);
            this.closedSet.push(current);
    
            for (let neighbour of this.board.neighbours(current)) {
                if (this.closedSet.includes(neighbour)) {
                    continue;
                }
    
                const tentative_gScore = this.gScore.get(current) + current.distanceTo(neighbour);
                const n_gScore = this.gScore.get(neighbour) || 9999;
                if (tentative_gScore < n_gScore) {
                    this.cameFrom.set(neighbour, current);
                    this.gScore.set(neighbour, tentative_gScore);
                    this.fScore.set(neighbour, this.gScore.get(neighbour) + neighbour.distanceTo(this.endCell));
    
                    if (!this.openSet.includes(neighbour)) {
                        this.openSet.push(neighbour);
                    }
                }
            }

            if (false) log.call(this);
        }

        throw "Unable to calculate path";
    }

}

module.exports = Calculation;
