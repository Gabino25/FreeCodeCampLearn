
function pairElement(str) {
   let retval = [];
  const search = function(p){
     switch(p){
       case "A":retval.push(["A", "T"]);
       break; 
       case "T":retval.push(["T", "A"]);
       break;
       case "C":retval.push(["C", "G"]);
       break; 
       case "G":retval.push(["G", "C"]);
       break; 
     }
  };

  let regexp = /./ig;
  let array = str.match(regexp);
  for(let i=0;i<array.length;i++){
    search(array[i]);
  }
  return retval;
}

pairElement("GCG");
