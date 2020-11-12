function findLongestWordLength(str) {
  const regexp = /\S+/g; 
  const array = str.match(regexp);
  console.log(array);
  let max = 0;
  for(let i=0;i<array.length;i++){
     console.log(array[i]);
     console.log(array[i].length);
     if(array[i].length>=max){
        max = array[i].length;
     }
  } 
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
