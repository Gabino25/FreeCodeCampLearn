function myReplace(str, before, after) {
   console.log(str);
   console.log(before);
   console.log(after);
   let regexp = new RegExp(before); //constructor 
   let regexpMayusc = new RegExp('^[A-Z]'); //constructor 
   let regexpFirst = new RegExp('^[a-z]','i'); //constructor 
   
   if(regexpMayusc.test(before)){
     console.log(after.match(regexpFirst));
     after = after.replace(after.match(regexpFirst)[0],after.match(regexpFirst)[0].toUpperCase());
     console.log(after); 
   }
   
   let matchObj = str.match(regexp);
   console.log(matchObj); 
   console.log(matchObj[0]);
   console.log(matchObj.index); 
   str = str.replace(regexp,after); 
   console.log(str);
   return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
