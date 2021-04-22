
const Animation = require("./base/Animation.js");
module.exports =  class RandomColors extends Animation {
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