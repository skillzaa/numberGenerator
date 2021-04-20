'use strict';

class Animation {
    constructor(aniData, argsForAlgo = {}) {
        //this.aniData = aniData;
        this.attributeToAnimateName = aniData.attributeToAnimateName; //must 
        this.fromSecond = aniData.fromSecond; //must for every animation
        this.toSecond = aniData.toSecond; //must for every animation
        this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;
        //--------------------------------------------------------------------
        this.argsForAlgo = argsForAlgo;
        //--------------------------------------------------------------------
        this.fps = 60; // this has to be settled
        this.state = {}; ///every new data goes here
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        return true;
    }
}
//module.exports = Animation;

//const Animation = require("./base/Animation");
module.exports = class Linear extends Animation {
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
        const deltaPerMilli = this.deltaPerMili();
        const currentTimeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);
        const attributeToAnimateDataUpdated = (deltaPerMilli * currentTimeDifferenceInMilli) + this.argsForAlgo.from; // no need for decimal since they r pixels
        return (Number(attributeToAnimateDataUpdated));
        //--------------------------------
    }
    deltaPerMili() {
        const timeDiff = (this.toSecond - this.fromSecond);
        const timeDiffMilli = timeDiff * 1000; //convert sec into milli sec
        const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
        const deltaPerMili = totalValueDiff / timeDiffMilli;
        return deltaPerMili;
    }
    currentTimeDifferenceInMilli(currentSecondMilli) {
        const fromSecondMilli = this.fromSecond * 1000;
        return Math.abs(Number(currentSecondMilli - fromSecondMilli));
    }
}
//module.exports = Linear;

//module.exports = Linear;
