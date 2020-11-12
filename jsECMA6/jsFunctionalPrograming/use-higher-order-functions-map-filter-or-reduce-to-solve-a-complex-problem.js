const squareList = (arr) => {
  // Only change code below this line
  console.log(arr);
  arr = arr.filter(p=> Number.isInteger(p)&&p>0).map(p => p*p);
  console.log(arr);
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
