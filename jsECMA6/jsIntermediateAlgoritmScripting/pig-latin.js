function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/gi; 
  let consonantRegex = /^[bcdfghjklmnpqrstvwxys]/gi;
  let begin ="";
  console.log("Comienza:"+str); 
if(/^[aeiou]/gi.test(str)){
  while(vowelRegex.test(str)){
   
    begin = begin.concat(str.match(vowelRegex));
    str = str.substr(1);
  }
  return begin.concat(str).concat("way");
}

  console.log(/^[bcdfghjklmnpqrstvwxys]/gi.test(str));
  if(/^[bcdfghjklmnpqrstvwxys]/gi.test(str)){
   console.log(/^[bcdfghjklmnpqrstvwxys]/gi.test(str));
   while(/^[bcdfghjklmnpqrstvwxys]/gi.test(str)){
     console.log("*");
     begin = begin.concat(str.match(consonantRegex));
     str = str.substr(1);
     console.log(str);
   }
   return str.concat(begin).concat("ay");
  }
  return "Hola";
}

let retval = translatePigLatin("algorithm");
console.log(retval);
