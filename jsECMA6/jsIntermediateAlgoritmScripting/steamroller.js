
function steamrollArray(arr) {
  while(arr.some(p=>Array.isArray(p))){
  arr = [].concat(...arr);
  console.log(arr);
  }
  return arr;
}

const getval = steamrollArray([1, [2], [3, [[4]]]]);
console.log(getval);
