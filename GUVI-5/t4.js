class Uber {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const distanceCost = this.costPerMile * distance;
        const timeCost = this.costPerMinute * time;
        return this.baseFare + distanceCost + timeCost;
    }
}

