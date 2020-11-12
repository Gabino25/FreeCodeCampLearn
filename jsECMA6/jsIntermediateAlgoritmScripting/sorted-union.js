function uniteUnique(arr) {
  console.log(arguments);
  console.log(arguments.length);
  let arrArray = [];
  for(let i=0;i<arguments.length;i++){
    
    let tmp = arguments[i];

    for(let j=0;j<tmp.length;j++){
      if(!arrArray.includes(tmp[j])){
        arrArray.push(tmp[j]);
      }  
    }
  }
  console.log(arrArray);
  
  console.log(arrArray);
  return arrArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

