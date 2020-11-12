function addTogether() {
  let retval; 
  let currentVal = arguments[0]; 
  if(typeof arguments[0] !=="number"){
    return undefined; 
  }
  console.log(arguments[0]);
  if(arguments.length>1){
     if(typeof arguments[0] !=="number"
      ||typeof arguments[1] !=="number"
      ||Array.isArray(arguments[1])){
     return undefined; 
     }
    console.log(arguments[0]);
    console.log(arguments[1]);
    retval = arguments[0]+arguments[1];
    return retval;
  }else{
     retval = function(p){
                if(Array.isArray(arguments[0])){
                  return undefined; 
                }
                 return p+currentVal; 
               }; 
     return retval;
  }
}

const value = addTogether(2)([3]);
console.log(value);
