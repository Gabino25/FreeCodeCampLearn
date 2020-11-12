let fibArray = [];
function getFib(num){
  if(num===0){
    return 0; 
  }
  if(num===1){
    return 1;
  }
  if(num>=2){
  if(fibArray)
  return getFib(num-1)+getFib(num-2);
  }
}
function sumFibs(num) {
  let array = [];
  array[0]=0;
  array[1]=1;
  for(let i=2;i<=num;i++){
    array[i]=array[i-1]+array[i-2];
    if(array[i]>=num){
      break;
    }
  }
  console.log(array);
  return array.filter(p=>p%2===1&&p<=num)
              .reduce((acum,p)=>acum+p);
}

const getval = sumFibs(1);
console.log(getval);