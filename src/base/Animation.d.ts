import IAnimation from "./IAnimation.js";
import IaniData from "./IaniData.js";
export default abstract class Animation implements IAnimation {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    state: {};
    fps: number;
    constructor(aniData: IaniData, argsForAlgo?: object);
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementData?: {}): string | number | boolean;
}
