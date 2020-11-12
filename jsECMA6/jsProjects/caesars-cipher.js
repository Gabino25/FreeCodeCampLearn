const lookup ={A:"N"
              ,B:"O"
              ,C:"P"
              ,D:"Q"
              ,E:"R"
              ,F:"S"
              ,G:"T"
              ,H:"U"
              ,I:"V"
              ,J:"W"
              ,K:"X"
              ,L:"Y"
              ,M:"Z"
              ,N:"A"
              ,O:"B"
              ,P:"C"
              ,Q:"D"
              ,R:"E"
              ,S:"F"
              ,T:"G"
              ,U:"H"
              ,V:"I"
              ,W:"J"
              ,X:"K"
              ,Y:"L"
              ,Z:"M"
              };
function rot13(str) {
  let array = str.match(/./ig);
  const mapFunc = function(p){
                   if(lookup.hasOwnProperty(p)){
                     return lookup[p];
                   }else{
                     return p;
                   }
                  };
  array = array.map((p)=>{
                   if(lookup.hasOwnProperty(p)){
                     return lookup[p];
                   }else{
                     return p;
                   }
                  });
  console.log(array);
  return array.join("");
}

const getval = rot13("SERR PBQR PNZC");
console.log(getval);
