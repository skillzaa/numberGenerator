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
class Linear extends Animation {
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
//module.exports = Linear;

class Vibrate extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.state.previous = 0;
        //this.state.previous = 0;
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
        if (this.state.previous == 0) {
            this.state.previous = Date.now();
        }
        this.argsForAlgo.timeGap;
        this.argsForAlgo.deviation;
        // if(this.isWaitOver() == true){
        //     this.state.previous = Date.now();
        return this.manipulate(attributeToAnimateData);
        // }
        // else{
        //     return attributeToAnimateData;
        // }
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
    }
    //-------------------------------------------------------------    
    isWaitOver() {
        const lapsedTime = Math.abs(Date.now() - this.state.previous);
        if (lapsedTime > this.argsForAlgo.timeGap) {
            return true;
        }
        else {
            return false;
        }
    }
    //-------------------------------------------------------------    
    manipulate(incomming) {
        const min = incomming - this.argsForAlgo.deviation;
        const max = incomming + this.argsForAlgo.deviation;
        return Math.abs(Math.random() * (max - min + 1) + min);
    }
}

class RandomColors extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        const ret = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        return (ret());
    }
}

/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(incomming = {}) {
        this.data.push(incomming);
        return incomming;
    }
    // add(name:string){
    // if (this.isUnique(name) === true){
    //     const a = {};
    //     a.name = name; 
    //     this.data.push(a);
    //     return a;    
    // } else {
    //     return {success: false, message : "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" }
    // }   
    // } 
    isUnique(name) {
        if (typeof name == "undefined") {
            return false;
        }
        let uniqueOrNot = true;
        for (let idx = 0; idx < this.data.length; idx++) {
            const element = this.data[idx];
            if (element.name === name) {
                uniqueOrNot = false;
            }
        }
        return uniqueOrNot;
    }
    get length() {
        return this.data.length;
    }
    getItem(name) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    } //.....................
    getProperty(name, value = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx][value];
            }
        }
        return false;
    }
    getAttr(name, value = "value") {
        return Number(this.getProperty(name));
    }
    // setAttr(name:string,value:string|number|boolean,propertyName = "value"){
    // return this.setProperty(name,value, propertyName);
    // }
    setProperty(name, value, subAttribItem = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx][subAttribItem] = value;
                return this.data[idx][subAttribItem];
            }
        }
        return true;
    } //......
    setAttr(name, value, subAttribItem = "value") {
        return Number(this.setProperty(name, value));
    } //......
    getAllByNames(argumentsRequired = []) {
        /**incooming is normal [] where as attributes is an obj wrapped around an aOO */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
    insertPropertiesFromArray(retData) {
        this.data.forEach(bd => {
            retData.forEach(ag => {
                if (ag.name == bd.name) {
                    bd.value = ag.value;
                }
            });
        });
        return true;
    } //..
    setAllProperties(propertyName, newValue) {
    }
    getItemsByNames(argumentsRequired = []) {
        /**incooming is normal []  */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
}

class Animations {
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

module.exports = Animations;
