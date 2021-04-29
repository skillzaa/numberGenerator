 import Animation from "./base/BaseGenerator.js";
//const Animation = require("./base/Animation");

export default class Linear extends Animation{
constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
}

animate(attributeToAnimateData:string|number|boolean,
    currentSecondMilli:number,
    readOnlyElementData:{}={}):string|number|boolean{

/**currentSecond is in mili seconds so convert it. input from user fromSecond toSecond is in seconds but internally it uses milli seconds.*/
const currentSecond = currentSecondMilli/1000;

//------if the time is not relevant return unchanged
if(currentSecond < this.fromSecond || currentSecond > this.toSecond)
{return attributeToAnimateData;}

const deltaPerMilli = this.deltaPerMilli();

const currentTimeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);
const attributeToAnimateDataUpdated = (deltaPerMilli * currentTimeDifferenceInMilli) + this.argsForAlgo.from; // no need for decimal since they r pixels
   return  (Number(attributeToAnimateDataUpdated));

//--------------------------------
}

deltaPerMilli(){
    const timeDiff = (this.toSecond - this.fromSecond);
    const timeDiffMilli = timeDiff * 1000; //convert sec into milli sec
const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
return  totalValueDiff / timeDiffMilli;  
}

currentTimeDifferenceInMilli(currentSecondMilli:number){
const fromSecondMilli = this.fromSecond * 1000;    
return Math.abs(Number(currentSecondMilli - fromSecondMilli));
}
//-------------------------------------------------------------    
}
//module.exports = Linear;