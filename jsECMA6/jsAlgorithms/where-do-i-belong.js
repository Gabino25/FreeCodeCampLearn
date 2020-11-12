function compare(a, b){
  if (a < b){return -1;}
  if (a > b){return 1;}
  if (a === b){return 0;}
}

function getIndexToIns(arr, num) {
  arr.sort(compare);
  console.log(arr); 
  let retval = 0; 
  if(arr[0]===num){
    return 0; 
  }
  if(arr[arr.length-1]<=num){
    return arr.length; 
  }
  for(let i=0;i<arr.length;i++){
      console.log(arr[i]+","+arr[i+1]);
      if(i===arr.length-1){
        break;
      }
      if(num>=arr[i]&&num<=arr[i+1]){
        return i+1;
      }
  }
  return retval;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
