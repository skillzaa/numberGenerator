// import IbasicAnimationData from "./IaniData.js";
// const IbasicAnimationData = require('./IaniData');

 interface IGenerator {

    attributeToAnimateName:string;
    fromSecond:number;
    toSecond:number;
    readOnlyElementAttrNames:string[]|[];
    argsForAlgo : {};
    //state:{};--THIS IS NOT PUBLIC
    fps:number;
    animate(
        attributeToAnimateData:string|number|boolean,
        currentSecondMilli:number,
        readOnlyElementAttr:{}):string|number|boolean; 
}
/**THE FROM, and To are avaiable through out the class from argsForAlgo and the fromSEcond and toSeconds avaiable in class  */

module.exports = IGenerator;

