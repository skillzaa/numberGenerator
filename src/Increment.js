import Animation from "./base/Animation.js";
export default class Increment extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
    }
    /**very strange finding i do not need attributeToAnimateData in linear-- its value has no effect on our calculations. all we need to do is to calc deltaPerSecond and then multiply it to the currentSecond and then add this to the "from" value. so if  from is 100 and deltaPerSecond is 2 and current second is 2.22 ===> 2.22 * 2 = 4.44 + from ie 100 answer = 104.44
     * YES but since its there so lets just check it for error checking ie it should not exceed ahead of its given value to be low
     *
      */
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        //------if the time is not relevant return unchanged
        if (currentSecond < this.fromSecond || currentSecond > this.toSecond) {
            return attributeToAnimateData;
        }
        const newValue = attributeToAnimateData + this.argsForAlgo.delta; // no need for decimal since they r pixels
        if (newValue <= this.argsForAlgo.to) {
            return Number(newValue);
        }
        else {
            return Number(attributeToAnimateData);
        }
        //--------------------------------
    }
}