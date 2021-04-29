"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator_js_1 = __importDefault(require("./base/BaseGenerator.js"));
//const Animation = require("./base/Animation");
class Linear extends BaseGenerator_js_1.default {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        /**currentSecond is in mili seconds so convert it. input from user fromSecond toSecond is in seconds but internally it uses milli seconds.*/
        const currentSecond = currentSecondMilli / 1000;
        //------if the time is not relevant return unchanged
        if (currentSecond < this.fromSecond || currentSecond > this.toSecond) {
            return attributeToAnimateData;
        }
        const deltaPerMilli = this.deltaPerMilli();
        const currentTimeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);
        const attributeToAnimateDataUpdated = (deltaPerMilli * currentTimeDifferenceInMilli) + this.argsForAlgo.from; // no need for decimal since they r pixels
        return (Number(attributeToAnimateDataUpdated));
        //--------------------------------
    }
    deltaPerMilli() {
        const timeDiff = (this.toSecond - this.fromSecond);
        const timeDiffMilli = timeDiff * 1000; //convert sec into milli sec
        const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
        return totalValueDiff / timeDiffMilli;
    }
    currentTimeDifferenceInMilli(currentSecondMilli) {
        const fromSecondMilli = this.fromSecond * 1000;
        return Math.abs(Number(currentSecondMilli - fromSecondMilli));
    }
}
exports.default = Linear;
//module.exports = Linear;
