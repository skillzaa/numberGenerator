import Linear from "./Linear.js";
import Vibrate from "./Vibrate.js";
import RandomColors from "./RandomColors.js";
import ArrayOfObjects from "./ArrayOfObjects.js";
export default class Animations {
    data: ArrayOfObjects;
    constructor();
    addLinear(attributeToAnimateName: string, fromSecond: number, toSecond: number, from: number, to: number, readOnlyElementAttrNames?: never[]): Linear;
    addVibrate(attributeToAnimateName: string, fromSecond: number, toSecond: number, timeGap: number, deviation: number, readOnlyElementAttrNames?: never[]): Vibrate;
    addRandomColors(attributeToAnimateName: string, fromSecond: number, toSecond: number, readOnlyElementAttrNames?: never[]): RandomColors;
}
