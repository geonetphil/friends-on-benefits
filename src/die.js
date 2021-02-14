export class Die {
    constructor() {
    }

    roll() {
        var dievalue = 1 + Math.floor(Math.random() * 6);
        return dievalue;
    }

}