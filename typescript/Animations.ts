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

moveHorizontal(fromSecond=1,toSecond=5,fromX=1,toX=100){
    const l = new Linear(
        {attributeToAnimateName: "x",fromSecond:fromSecond, toSecond:toSecond, readOnlyElementAttrNames:[]},{from:fromX, to:toX});
    this.data.add(l);    
    return true;
   
}
// //---------------------------------
moveVerticle(fromSecond=1,toSecond=5,fromY=1,toY=100){
    const l = this.addLinear(
        "y",fromSecond,toSecond,fromY, toY,[]);
    this.data.add(l);    
    return true;    
}
// //---------------------------------
moveDiagonal(fromSecond=1,toSecond=5,fromX=1,toX=100,fromY=1,toY=100){
    const lX = this.addLinear(
        "x",fromSecond,toSecond,fromX,toX,[]);
    this.data.add(lX);   

    const ly = this.addLinear(
        "y",fromSecond, toSecond,fromY,toY,[]);
    this.data.add(ly);    
    return true;    
}

widen(fromSecond:number,toSecond:number,fromWidth:number,toWidth:number):boolean{
    const w = this.addLinear(
        "width",fromSecond,toSecond,fromWidth, toWidth,[]);
    this.data.add(w);
    return true;    
}
heighten(fromSecond:number,toSecond:number,fromHeight:number,toHeight:number):boolean{
    const h = this.addLinear(
        "height",fromSecond,toSecond,fromHeight,toHeight,[]);
    this.data.push(h);    
    return true;    
}
scale(fromSecond:number,toSecond:number,fromWidth:number,toWidth:number,fromHeight:number,toHeight:number){
    const w = this.addLinear(
        "width",fromSecond,toSecond,fromWidth, toWidth,[]);
    this.data.add(w);    
//----------------------------
    const h = this.addLinear(
        "height",fromSecond,toSecond,fromHeight,toHeight,[]);
    this.data.add(h);   
    return true;    
}
rotate(fromSecond:number=1, toSecond:number=5,from:number=1,to:number=100):boolean{
    const w = this.addLinear(
        "currentRotateAngle",fromSecond,toSecond,from,to);
    this.data.add(w);    
    return true;
}

//////////////////////////////////////////////////

}