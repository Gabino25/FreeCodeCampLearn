function bouncer(arr) {
  let retval = [];
  for(let i=0;i<arr.length;i++){
    let value = Boolean(arr[i]);
    console.log(value);
    if(arr[i]){
    retval.push(arr[i]);
    }
  }
  return retval;
}

bouncer([7, "ate", "", false, 9]);
