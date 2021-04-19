export default interface IAnimation {
    attributeToAnimateName: string;
    readOnlyElementAttrNames: string[] | [];
    fromSecond: number;
    toSecond: number;
    argsForAlgo: {};
    state: {};
    fps: number;
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementAttr: {}): string | number | boolean;
}
