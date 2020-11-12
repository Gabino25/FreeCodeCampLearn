const abcd = "abcdefghijklmnopqrstuvwxyz"; 
const abcdArray = abcd.match(/./g);

function fearNotLetter(str) {
  let strArray = str.match(/./g); 
  let minIndex = abcd.indexOf(strArray[0]);
  console.log(minIndex);
  console.log(abcdArray[18]);
  
  for(let i=minIndex;i<(minIndex+strArray.length);i++){
    console.log(strArray[i-minIndex]);
    if(strArray[i-minIndex]!==abcdArray[i]){
          return abcdArray[i];
    }
  }
  return undefined;
}

const retval = fearNotLetter("stvwx");
console.log(retval);
