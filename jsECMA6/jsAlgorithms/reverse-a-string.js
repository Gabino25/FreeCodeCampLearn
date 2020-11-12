function reverseString(str) {
  let shortHand = /./g;
  let arr = str.match(shortHand);
  console.log(arr);
  str = '';
  for(let i=(arr.length-1);i>=0;i--){
    console.log(arr[i]); 
    str+=arr[i];
  }
  return str;
}

reverseString("hello");
