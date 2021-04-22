export default interface IAnimation {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    fps: number;
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementAttr: {}): string | number | boolean;
}
/**THE FROM, and To are avaiable through out the class from argsForAlgo and the fromSEcond and toSeconds avaiable in class  */ 
