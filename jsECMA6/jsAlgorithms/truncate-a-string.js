function truncateString(str, num) {
  const regexp =/./g;
  const array = str.match(regexp);
  let retval = "";
  console.log(array);
  for(let i=0;i<num;i++){
     retval = retval+array[i];
  }
  if(num<str.length){
    retval = retval+"...";
    return retval;
  }else{
    return str; 
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
