const Linear = require("../dist/Linear");
const log = console.log;
const linear = new Linear(
  {attributeToAnimateName:"x",fromSecond:5,toSecond:10,readOnlyElementAttrNames:[]},
  {from:0,to:300}
);


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
const deltaPerMilli = linear.deltaPerMili();

for (let currentTime = 5000; currentTime <= 10000; currentTime++) {
  let newX =  linear.animate(x,currentTime,{});

  test('testing loop', () => {
  const  timeDifferenceMilli  = linear.currentTimeDifferenceInMilli(currentTime);
  const ans = (deltaPerMilli * timeDifferenceMilli) + linear.argsForAlgo.from; 
  expect(newX).toEqual(ans);
  });
}
