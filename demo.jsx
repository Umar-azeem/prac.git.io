import React from "react";
const Demo = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mapped = array.map(umar => umar + 1)
  const p = ["apple","peach"]
  console.log(p.unshift("kila"));
  console.log(p);
  const fr = ["hi","helo","aoa","u"];
  console.log(fr.push("ba"));
  console.log(fr);
  const fruit = ["apple","peach"];
  fruit.shift(fruit);
  console.log(fruit);
   let num =[1,2,3];
   num.sort();
   const name = ['umar', 'ali' ,'sadd' ,'saad' ];
   name.forEach((name, index) => {
   console.log(`${index}: ${name}`)}
    );  
    const arr1 =['a','b','c'];
    const arr2 =['d','e','f'];
    console.log(arr1.concat(arr2));
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const found =arr.find(e => e > 4);
   console.log(found);
   console.log(mapped);
    return <div>
    return <p className="text-start mr-4 font-normal flex text-lg text-white">{mapped}{num}{name}</p>
    <p className="text-start mr-4 font-normal flex text-lg text-white">{fr}{found}{p}{fruit}</p>
  </div>
};

export default Demo;
