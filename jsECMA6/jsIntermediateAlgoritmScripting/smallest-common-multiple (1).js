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

function smallestCommons(arr) {
  let retval =1; 
  let arrayRange = [];
  let max = Math.max(arr[0],arr[1]);
  let min = Math.min(arr[0],arr[1]); 
  let arrayPrimes = getPrimes(max); 
  for(let i=min;i<=max;i++){
    arrayRange.push(i); 
  }
  console.log(...arrayPrimes);
  console.log(...arrayRange);
  for(let j=0;j<arrayPrimes.length;j++){
    console.log("Prime:",arrayPrimes[j]);
    console.log(arrayRange.some(p=>p%arrayPrimes[j]===0));
    while(arrayRange.some(p=>p%arrayPrimes[j]===0)){
     for(let i=0;i<arrayRange.length;i++){
     console.log("arrayRange",arrayRange[i],"%","arrayPrimes",arrayPrimes[j]); 
    if(arrayRange[i]%arrayPrimes[j]===0){
      arrayRange[i] = arrayRange[i]/arrayPrimes[j];
    }
    }
    retval = retval*arrayPrimes[j]; 
    console.log(...arrayRange); 
    console.log("revtal",retval); 
    }
  }
  console.log(retval);
  return retval;
}


smallestCommons([2,10]);

