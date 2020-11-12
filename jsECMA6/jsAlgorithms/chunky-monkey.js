function chunkArrayInGroups(arr, size) {
  let retval = [];
  console.log(arr.slice(0,2)); 
  console.log(arr.slice(2,4)); 
  for(let i=0;i<arr.length;i+=size){
   console.log(i);
   retval.push(arr.slice(i,i+size));
  }
  console.log(retval);
  return retval;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
