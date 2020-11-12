function sumAll(arr) {
  let array = []; 
  let value = 0; 
  if(arr[0]<arr[1]){
    value =arr[0];  
    for(let i=0;i<=(arr[1]-arr[0]);i++){
        array.push(value++); 
    }
  }else{
    value =arr[1];  
    for(let i=0;i<=(arr[0]-arr[1]);i++){
        array.push(value++); 
    }
  }
  console.log(array); 
  console.log(array.reduce((acum,value)=>(acum+value))); 
  return array.reduce((acum,value)=>(acum+value));
}

sumAll([1, 4]);
