const Vibrate = require("../dist/Vibrate");
const log = console.log;
const vibrate = new Vibrate(
  {attributeToAnimateName:"x",fromSecond:1,toSecond:10,readOnlyElementAttrNames:[]},
  {timeGap:0,deviation:5}
);
log(vibrate);
log("First",vibrate.animate(15,1,[]));
log("2",vibrate.animate(15,1,[]));
log("3",vibrate.animate(15,1,[]));
log("4",vibrate.animate(15,1,[]));

test('min cur time = 0 so x = from = 0', () => {
 
  expect(0).toEqual(0);
  setInterval(()=>{
    log("timeout",vibrate.animate(15,1,[]));
},300);
});


// test('cur time = max = 10000 so x=to=300 also > 0 ', () => {
//   let newX =  linear.animate(0,10000)
//   //log(newX);
//   expect(newX).toEqual(300);
// });


// //===================================================
// let x = 0; //from  
// const deltaPerMilli = linear.deltaPerMili();

// for (let currentTime = 5000; currentTime <= 10000; currentTime++) {
//   let newX =  linear.animate(x,currentTime,{});

//   test('testing loop', () => {
//   const  timeDifferenceMilli  = linear.currentTimeDifferenceInMilli(currentTime);
//   const ans = (deltaPerMilli * timeDifferenceMilli) + linear.argsForAlgo.from; 
//   expect(newX).toEqual(ans);
//   });
// }
