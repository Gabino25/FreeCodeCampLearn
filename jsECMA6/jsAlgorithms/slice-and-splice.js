function frankenSplice(arr1, arr2, n) {
  console.log(arr2);
  console.log(arr1);
  let array = arr2.splice(0,n);
  console.log(array); 
  console.log(arr2); 
  return [...array,...arr1,...arr2];
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
