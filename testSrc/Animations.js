
const Linear = require("./Linear.js");
const Vibrate = require("./Vibrate.js");
const RandomColors = require("./RandomColors.js");
const ArrayOfObjects = require("./ArrayOfObjects.js");
module.exports =  class Animations {
    constructor() {
        this.data = new ArrayOfObjects();
    }
    addLinear(attributeToAnimateName, fromSecond, toSecond, from, to, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { from: from, to: to };
        const a = new Linear(aniData, argsForAlgo);
        this.data.add(a);
        return a;
    }
    addVibrate(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Vibrate(aniData, argsForAlgo);
        this.data.add(a);
        return a;
    }
    addRandomColors(attributeToAnimateName, fromSecond, toSecond, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const a = new RandomColors(aniData, {});
        this.data.add(a);
        return a;
    }
}