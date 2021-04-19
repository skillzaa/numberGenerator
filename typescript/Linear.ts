import Animation from "../dist/base/Animation--safe.js";
import IaniData from "../../interfaces/IaniData.js";
import IAnimation from "../dist/base/IAnimation.js";

export default class Linear extends Animation implements IAnimation{
constructor(aniData:IaniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
}
/**very strange finding i do not need attributeToAnimateData in linear-- its value has no effect on our calculations. all we need to do is to calc deltaPerSecond and then multiply it to the currentSecond and then add this to the "from" value. so if  from is 100 and deltaPerSecond is 2 and current second is 2.22 ===> 2.22 * 2 = 4.44 + from ie 100 answer = 104.44
 * YES but since its there so lets just check it for error checking ie it should not exceed ahead of its given value to be low
 * 
  */
animate(attributeToAnimateData:string|number|boolean,
    currentSecond:number,
    readOnlyElementData:{}={}):string|number|boolean{
//------if the value is above the "to" return unchanged
// if(attributeToAnimateData >= this.argsForAlgo.to)
// {return attributeToAnimateData;}

//------if the time is not relevant return unchanged
if(currentSecond < this.fromSecond || currentSecond > this.toSecond)
{return attributeToAnimateData;}
//---------also no need for delata per frame------------
//const deltaPerFrame = this.deltaPerFrame();   
//**Technique -- 1 :: the problem is that the frame rate can change and the speed will not be according to time-- remote machines will not be synchronozied */
//   //here its just ++ wo time, note the +=  
//attributeToAnimateData.value += deltaPerFrame ; 
 
//now am using current second--am not using delta per frame!!!!
const deltaPerSecond = this.deltaPerSecond();
/**there is an error in the fol equa-- ie instead of currentSecond I should * it with current-time-difference-- this is causing a large jump in the begining */
//attributeToAnimateData = (this.argsForAlgo.from + (deltaPerSecond * currentSecond)).toFixed(2);
const currentTimeDifference = this.currentTimeDifference(currentSecond);
attributeToAnimateData = (deltaPerSecond * currentTimeDifference) + this.fromSecond; // no need for decimal since they r pixels
   return Number(attributeToAnimateData);

//--------------------------------
}
//-------------------------------------------------------------    
deltaPerFrame(){    
const deltaPerSecond = this.deltaPerSecond();
const deltaPerFrame = (deltaPerSecond /this.fps);
return deltaPerFrame.toFixed(2);
}
/**this needs   TO BE TOfIXED(3) SINCE WE ARE COUNTING MILLISECONDS.*/
deltaPerSecond(){
    const timeDiff = (this.toSecond - this.fromSecond);
const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
const deltaPerSecond = totalValueDiff / timeDiff;  
return deltaPerSecond.toFixed(2);
}

currentTimeDifference(currentSecond:number){
const currentTimeDifference  = (currentSecond - this.fromSecond).toFixed(2);
return Number(currentTimeDifference);
}
//-------------------------------------------------------------    
}