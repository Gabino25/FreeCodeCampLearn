const lookup = {1:{1000:"M"}
               ,2:{900:"CM"}
               ,3:{500:"D"}
               ,4:{400:"CD"}
               ,5:{100:"C"}
               ,6:{90:"XC"}
               ,7:{50:"L"}
               ,8:{40:"XL"}
               ,9:{10:"X"}
               ,10:{9:"IX"}
               ,11:{5:"V"}
               ,12:{4:"IV"}
               ,13:{1:"I"}
               }; 

function convertToRoman(num) {
 let retval ="";
 for(let i in lookup){
   for(let j in lookup[i]){
     //console.log(j,lookup[i][j]);
     while(j<=num){
      retval =retval+lookup[i][j];
      num = num-j;
      console.log(retval,num);
     }
   }
 }
 return retval;
}

convertToRoman(36);

