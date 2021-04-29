import Animation from "./base/BaseGenerator.js";
export default class Linear extends Animation {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementData?: {}): string | number | boolean;
    deltaPerMilli(): number;
    currentTimeDifferenceInMilli(currentSecondMilli: number): number;
}
