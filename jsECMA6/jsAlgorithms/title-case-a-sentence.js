function titleCase(str) {
  let retval = "";
  const regexp =/\S+/g;
  const regexp2 =/./g;
  const wsRegex = /\s$/;
  
  const arr = str.match(regexp);
  console.log(arr);
  for(let i=0;i<arr.length;i++){
     console.log(arr[i]);
     const arr2 = arr[i].match(regexp2);
     console.log(arr2);
     arr2[0] = arr2[0].toUpperCase();
     retval = retval+arr2[0];
     for(let j=1;j<arr2.length;j++){
       arr2[j] = arr2[j].toLowerCase();
        retval = retval+arr2[j];
     }
    retval = retval+" ";
  }
  console.log(retval);
  retval = retval.replace(wsRegex,'');
  console.log(retval);
  return retval;
}

titleCase("I'm a little tea pot");
