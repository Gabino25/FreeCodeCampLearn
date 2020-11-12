function telephoneCheck(str) {
  let regexp1 = new RegExp(/^1/,'g'); 
  let regexp4 = new RegExp(/^-/,'g'); 
  let regexp6 = new RegExp(/^0/,'g'); 
  let regexp2 = new RegExp(/\(\d{3}\)/,'g'); 
  let regexp3 = new RegExp(/\s\d{3}\)/,'g'); 
  let regexp5 = new RegExp(/[\*\?]/,'g'); 
  let regexp7 = new RegExp(/\d/,'g'); 
  let regexp8 = new RegExp(/^\d/,'g'); 

  console.log(str.match(regexp1));
  console.log(str.replace(/-/ig,""));
  console.log(str.match(regexp2));
  console.log(str.match(regexp3));
  console.log(str.match(regexp7));

  if(str.match(regexp7).length===12){
    return false;
  }

  if(str.match(regexp7).length===11&&str.match(regexp8)!="1"){
    return false;
  }

  if(regexp3.test(str)){
     return false;
  }

  if(regexp4.test(str)){
     return false;
  }

  if(regexp5.test(str)){
     return false;
  }

   if(regexp6.test(str)){
     return false;
  }

  if(regexp1.test(str)){
   return true;
  }else if(str.length===10){
   return true;
  }else if(str.replace(/[-]/ig,"").length===10){
   return true;
  }else if(regexp2.test(str)){
    return true;
  }
  return false;
}

telephoneCheck("2 (757) 622-7382");
