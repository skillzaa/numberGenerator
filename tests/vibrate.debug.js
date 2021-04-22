const Animations  = require("../dist/Animations.1.0.1.CJS");
const animations = new Animations();
const log = console.log;

const vib = animations.addVibrate("x",1,10,5000,300,[]);
let newX = vib.animate(0,1000);

log(newX);
  
let newX2 = vib.animate(33,1200);
log(newX2);
