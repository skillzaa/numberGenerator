import Linear from "./Linear.js";
import Vibrate from "./Vibrate.js";
import RandomColors from "./RandomColors.js";
import ArrayOfObjects from "./ArrayOfObjects.js";
export default class Animations {
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
    moveHorizontal(fromSecond = 1, toSecond = 5, fromX = 1, toX = 100) {
        const l = new Linear({ attributeToAnimateName: "x", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: fromX, to: toX });
        this.data.add(l);
        return true;
    }
    // //---------------------------------
    moveVerticle(fromSecond = 1, toSecond = 5, fromY = 1, toY = 100) {
        const l = this.addLinear("y", fromSecond, toSecond, fromY, toY, []);
        this.data.add(l);
        return true;
    }
    // //---------------------------------
    moveDiagonal(fromSecond = 1, toSecond = 5, fromX = 1, toX = 100, fromY = 1, toY = 100) {
        const lX = this.addLinear("x", fromSecond, toSecond, fromX, toX, []);
        this.data.add(lX);
        const ly = this.addLinear("y", fromSecond, toSecond, fromY, toY, []);
        this.data.add(ly);
        return true;
    }
    widen(fromSecond, toSecond, fromWidth, toWidth) {
        const w = this.addLinear("width", fromSecond, toSecond, fromWidth, toWidth, []);
        this.data.add(w);
        return true;
    }
    heighten(fromSecond, toSecond, fromHeight, toHeight) {
        const h = this.addLinear("height", fromSecond, toSecond, fromHeight, toHeight, []);
        this.data.push(h);
        return true;
    }
    scale(fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) {
        const w = this.addLinear("width", fromSecond, toSecond, fromWidth, toWidth, []);
        this.data.add(w);
        //----------------------------
        const h = this.addLinear("height", fromSecond, toSecond, fromHeight, toHeight, []);
        this.data.add(h);
        return true;
    }
    rotate(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const w = this.addLinear("currentRotateAngle", fromSecond, toSecond, from, to);
        this.data.add(w);
        return true;
    }
}
