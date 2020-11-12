function rangeOfNumbers(startNum, endNum) {
  console.log(startNum,endNum); 
   if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum,endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};

console.log(rangeOfNumbers(1,10)); 
