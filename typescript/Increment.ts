import Animation from "./base/Animation.js";

export default class Increment extends Animation{
constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
}

animate(attributeToAnimateData:string|number|boolean,
    currentSecond:number,
    readOnlyElementData:{}={}):string|number|boolean{
//------if the time is not relevant return unchanged
if(currentSecond < this.fromSecond || currentSecond > this.toSecond)
{return attributeToAnimateData;}

const newValue:number|string|boolean = attributeToAnimateData + this.argsForAlgo.delta; // no need for decimal since they r pixels
if(newValue <= this.argsForAlgo.to){
    return Number(newValue);
}else{
    return Number(attributeToAnimateData);
}

//--------------------------------
}
//-------------------------------------------------------------    

//-------------------------------------------------------------    
}