
const Animations = require("./Animations.js");
const log = console.log;
const animations = new Animations();
log(animations);
const l = animations.addLinear("x", 1, 100, 0, 1000);
const v = animations.addVibrate("x", 1, 100, 100, 10);
const r = animations.addRandomColors("x", 1, 100);
log(l);
log(v);
log(r);