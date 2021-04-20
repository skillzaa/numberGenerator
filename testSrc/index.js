
const Vibrate = require("../src/Vibrate.js")
const log = console.log;
const vibrate = new Vibrate({ attributeToAnimateName: "x", fromSecond: 1, toSecond: 10, readOnlyElementAttrNames: [] }, { timeGap: 0, deviation: 5 });
log(vibrate);
log("First", vibrate.animate(15, 1, []));
log("2", vibrate.animate(15, 1, []));
log("3", vibrate.animate(15, 1, []));
log("4", vibrate.animate(15, 1, []));