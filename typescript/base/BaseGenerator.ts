
class BaseGenerator{  
            attributeToAnimateName:string;
            fromSecond:number;   
            toSecond:number;
            readOnlyElementAttrNames:string[]|[];
            argsForAlgo : {};
private     state:{};
            fps:number;

constructor(aniData:IaniData,argsForAlgo:object={}){
 //this.aniData = aniData;
 this.attributeToAnimateName = aniData.attributeToAnimateName ;//must 
 this.fromSecond = aniData.fromSecond  ; //must for every animation
 this.toSecond = aniData.toSecond ;//must for every animation
 this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;   
//--------------------------------------------------------------------
 this.argsForAlgo = argsForAlgo;
//--------------------------------------------------------------------
 this.fps =  60 ; // this has to be settled
 this.state = {}; ///every new data goes here
}

public animate(attributeToAnimateData:string|number|boolean,
    currentSecondMilli:number,
    readOnlyElementData:{}={}):string|number|boolean{    
return true;
}
//===============================================  
}
module.exports = BaseGenerator;