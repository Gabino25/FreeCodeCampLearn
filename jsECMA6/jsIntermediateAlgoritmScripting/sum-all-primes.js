function getPrimes(pNum){
  let retval =[]; 
  for(let i=0;i<=pNum;i++){
     if(isPrime(i)){
       retval.push(i);
     }
  }
  return retval; 
}

function isPrime(pNum){
  if(pNum===0||pNum===1){
    return false; 
  }
  for(let i=2;i<pNum;i++){
   if(pNum%i===0){
     return false;
   }
  }
  return true;
}
function sumPrimes(num) {
  let getArray = getPrimes(num);
  console.log(getArray); 
  return getArray.reduce((acum,current)=>acum+current);
}

sumPrimes(10);
