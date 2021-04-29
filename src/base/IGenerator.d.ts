interface IGenerator {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    fps: number;
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementAttr: {}): string | number | boolean;
}
