import Animation from "../dist/base/Animation--safe.js";
import IaniData from "../../interfaces/IaniData.js";
import IAnimation from "../dist/base/IAnimation.js";
export default class Linear extends Animation implements IAnimation {
    constructor(aniData: IaniData, argsForAlgo?: {});
    /**very strange finding i do not need attributeToAnimateData in linear-- its value has no effect on our calculations. all we need to do is to calc deltaPerSecond and then multiply it to the currentSecond and then add this to the "from" value. so if  from is 100 and deltaPerSecond is 2 and current second is 2.22 ===> 2.22 * 2 = 4.44 + from ie 100 answer = 104.44
     * YES but since its there so lets just check it for error checking ie it should not exceed ahead of its given value to be low
     *
      */
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    deltaPerFrame(): string;
    /**this needs   TO BE TOfIXED(3) SINCE WE ARE COUNTING MILLISECONDS.*/
    deltaPerSecond(): string;
    currentTimeDifference(currentSecond: number): number;
}
