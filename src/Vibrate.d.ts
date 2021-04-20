import Animation from "./base/Animation.js";
export default class Vibrate extends Animation {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    isWaitOver(): boolean;
    manipulate(incomming: any): number;
}
