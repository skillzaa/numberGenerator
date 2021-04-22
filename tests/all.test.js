const Animations  =require("../dist/AnimationsCJS");
const log = console.log;
const animations = new Animations();


test('expect(typeof l).toBe(object)', () => {
    const l = animations.addLinear("x",1,100,0,1000);
    expect(typeof l).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const v = animations.addVibrate("x",1,100,100,10);
    expect(typeof v).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const r = animations.addRandomColors("x",1,100);
    expect(typeof r).toBe('object');
  });

