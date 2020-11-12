function palindrome(str) {
  str = str.toLowerCase(); 
  let regexp = /[a-z0-9]/ig;
  let arr = str.match(regexp); 
  let arr2 = []; 
  for(let i=arr.length-1;i>=0;i--){
    arr2.push(arr[i]);
  }

  console.log(arr);
  console.log(arr2);

  for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr2[i]){
      return false;
    }
  }
 
  return true;
}



palindrome("1 eye for of 1 eye.");
