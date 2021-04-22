import Animation from "./base/Animation.js";
export default class RandomColors extends Animation {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        const ret = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        return (ret());
    }
}
