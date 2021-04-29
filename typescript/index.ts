const Generators = require('./Generators');
const log = console.log;

const generators = new Generators();

log(generators);

const l = generators.addCounter("x",1,100,0,1000);
const v = generators.addVibrate("x",1,100,100,10);
const r = generators.addRandomColors("x",1,100);

log(l);
log(v);
log(r);