function dropElements(arr, func) {
  console.log(arr.some(func)); 
  if(!arr.some(func)){
    return [];
  }
  
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(func(arr[i]));
    if(func(arr[i])){
      arr = arr.slice(i);
      break;
    }
  }
  console.log(arr)
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });

