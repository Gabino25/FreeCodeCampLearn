function largestOfFour(arr) {
  let retval=[];
  for(let i in arr){
    console.log(arr[i]);
    let max = arr[i][0]; 
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]>max){
        max = arr[i][j]; 
      }
    }
    retval.push(max);
  } 
  return retval;
}

const getval = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(getval); 
