import Linear from "./Linear.js";
import Vibrate from "./Vibrate.js";
import RandomColors from "./RandomColors.js";
import ArrayOfObjects from "./ArrayOfObjects.js";

export default class Animations {
data:ArrayOfObjects;    
constructor(){
this.data = new ArrayOfObjects();    
}


addLinear(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    from:number,
    to:number,
    readOnlyElementAttrNames=[]
    ){
const aniData = {
    attributeToAnimateName:attributeToAnimateName,
    fromSecond:fromSecond,
    toSecond:toSecond,
    readOnlyElementAttrNames:readOnlyElementAttrNames
};
const argsForAlgo = { from: from, to:to};
const a = new Linear(aniData,argsForAlgo);
this.data.add(a);
return a;
}


addVibrate(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    timeGap:number,
    deviation:number,
    readOnlyElementAttrNames=[]
    ){
    const aniData = {
        attributeToAnimateName:attributeToAnimateName,
        fromSecond:fromSecond,
        toSecond:toSecond,
        readOnlyElementAttrNames:readOnlyElementAttrNames
    };
    const argsForAlgo = { timeGap: timeGap, deviation:deviation};
const a = new Vibrate(aniData,argsForAlgo);        
this.data.add(a);
return a;
}
addRandomColors(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    readOnlyElementAttrNames=[]
    ){
        const aniData = {
        attributeToAnimateName:attributeToAnimateName,
        fromSecond:fromSecond,
        toSecond:toSecond,
        readOnlyElementAttrNames:readOnlyElementAttrNames
    };
const a = new RandomColors(aniData,{});
this.data.add(a);
return a;
}

//////////////////////////////////////////////////

}