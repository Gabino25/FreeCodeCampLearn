function mutation(arr) {
  let elem1 = arr[0]; 
  let elem2 = arr[1];
  elem1 = elem1.toLowerCase(); 
  elem2 = elem2.toLowerCase(); 
  console.log(elem1);
  console.log(elem2);
  const regexp = /./ig;
  let arr2 =   elem2.match(regexp); 
  console.log(arr2);  
  
  for(let i=0;i<arr2.length;i++){
    console.log(elem1.indexOf(arr2[i]));
    if(elem1.indexOf(arr2[i])<0){
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);
