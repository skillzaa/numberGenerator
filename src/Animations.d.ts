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
    moveHorizontal(fromSecond?: number, toSecond?: number, fromX?: number, toX?: number): boolean;
    moveVerticle(fromSecond?: number, toSecond?: number, fromY?: number, toY?: number): boolean;
    moveDiagonal(fromSecond?: number, toSecond?: number, fromX?: number, toX?: number, fromY?: number, toY?: number): boolean;
    widen(fromSecond: number, toSecond: number, fromWidth: number, toWidth: number): boolean;
    heighten(fromSecond: number, toSecond: number, fromHeight: number, toHeight: number): boolean;
    scale(fromSecond: number, toSecond: number, fromWidth: number, toWidth: number, fromHeight: number, toHeight: number): boolean;
    rotate(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
}
