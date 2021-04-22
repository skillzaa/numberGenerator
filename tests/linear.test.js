const Animations  = require("../dist/Animations.1.0.1.CJS");
const animations = new Animations();

const log = console.log;

const linear = animations.addLinear("x",5,10,0,300);


test('min cur time = 0 so x = from = 0', () => {
  let newX =  linear.animate(0,5000)
  //log(newX);
  expect(newX).toEqual(0);
});
test('cur time = max = 10000 so x=to=300 also > 0 ', () => {
  let newX =  linear.animate(0,10000)
  //log(newX);
  expect(newX).toEqual(300);
});


//===================================================
let x = 0; //from  
const deltaPerMilli = linear.deltaPerMilli();

for (let currentTimeMilli = 5000; currentTimeMilli <= 10000; currentTimeMilli++) {
  let newX =  linear.animate(x,currentTimeMilli);

  test('testing loop', () => {
  const  timeDifferenceMilli  = linear.currentTimeDifferenceInMilli(currentTimeMilli);
  const ans = (deltaPerMilli * timeDifferenceMilli) + linear.argsForAlgo.from; 
  expect(newX).toEqual(ans);
  });
}
