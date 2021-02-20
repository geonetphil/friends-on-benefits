export class Die {
    constructor() {
    }

    roll() {
        var dievalue = Math.floor(Math.random() * 6);
        return dievalue;
    }

}