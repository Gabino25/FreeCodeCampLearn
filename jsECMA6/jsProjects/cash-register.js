const lookup = {"ONE HUNDRED":100
               ,"TWENTY":20
               ,"TEN":10
               ,"FIVE":5
               ,"ONE":1
               ,"QUARTER":0.25
               ,"DIME":0.1
               ,"NICKEL":0.05
               ,"PENNY":0.01
               }

const getCid = function getCid(cid,value){
  for(let i=0;i<cid.length;i++){
     console.log("cid[i][0]===value",cid[i][0],value);
     if(cid[i][0]===value){
       return i;
     }
  }
  return 0;
}

const getSumCid = function (cid){
  let retval = 0; 
  for(let i=0;i<cid.length;i++){
     retval=retval+cid[i][1];
  }
  return retval; 
}

function checkCashRegister(price, cash, cid) {
  let array =[];
  let change={status:""
             ,change:""
              };
  let diff = cash-price; 
  console.log(diff);       
  let tmpSumCid = getSumCid(cid); 
  console.log("tmpSumCid",tmpSumCid); 
  if(tmpSumCid<diff){
    console.log("*")
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }     
  console.log("**");
  if(tmpSumCid===diff){
     for(let i in lookup){
      let tmpVar =0; 
      let tmpCidIDx = getCid(cid,i);
      let tmpCidValue = cid[tmpCidIDx][1];
      console.log("lookup[i]",lookup[i],"diff",diff,"cid[tmpCidIDx][1]",cid[tmpCidIDx][1])
      while(lookup[i]<=diff&&lookup[i]<=cid[tmpCidIDx][1]){
         tmpVar = tmpVar+lookup[i];
         console.log("tmpVar**",tmpVar)
         diff = parseFloat(diff-lookup[i]).toFixed(2);
         cid[tmpCidIDx][1] = parseFloat(cid[tmpCidIDx][1]-lookup[i]).toFixed(2);
      }
      if(tmpVar!==0){
      tmpVar = parseFloat(tmpVar).toFixed(1);
      array.push([i,parseFloat(tmpVar)]);
      }else{
        array.push([i,tmpVar]);
      }
      
      console.log("array",array,"tmpVar",tmpVar)
     }
     
     let array2 = []; 
     for(let i=(array.length-1);i>=0;i--){
       array2.push(array[i]);
     }
     change.status="CLOSED";
     change.change = array2;
     return change;
  }else if(diff<0){
    change.status="INSUFFICIENT_FUNDS";
  }else if(diff>0){
    for(let i in lookup){
      let tmpVar =0; 
      let tmpCidIDx = getCid(cid,i);
      let tmpCidValue = cid[tmpCidIDx][1];
      console.log("lookup[i]",lookup[i],"diff",diff,"cid[tmpCidIDx][1]",cid[tmpCidIDx][1])
      while(lookup[i]<=diff&&lookup[i]<=cid[tmpCidIDx][1]){
         tmpVar = tmpVar+lookup[i];
         console.log("tmpVar**",tmpVar)
         diff = parseFloat(diff-lookup[i]).toFixed(2);
         cid[tmpCidIDx][1] = cid[tmpCidIDx][1]-lookup[i];
      }
      array.push([i,tmpVar]);
      console.log("array",array,"tmpVar",tmpVar)
     }
     array = array.filter(obj=>obj[1]!==0); 
     change.status="OPEN";
     change.change = array;
     if(getSumCid(change.change)<(cash-price)){
       return {status: "INSUFFICIENT_FUNDS", change: []};
     }
  }
 
  console.log(change);
  return change;
}

const getval = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(getval);



