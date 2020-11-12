let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

let elem1 = myNestedArray[0];
let elem2 = myNestedArray[1]; 
let elem3 = myNestedArray[2]; 
let elem4 = myNestedArray[3]; 

elem2[0] = "deep";
elem3[0] = "deeper";
elem4[0] = "deepest";
myNestedArray[0] = [[[[...elem1]]]]
myNestedArray[1] = [[...elem2]]
myNestedArray[2] = [[[...elem3]]]
myNestedArray[3] = [[[[...elem4]]]]

console.log(myNestedArray);
