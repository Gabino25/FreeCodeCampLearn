function spinalCase(str) {
  console.log(str); 
  str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
  str = str.split(/\s+|_+/g).join("-").toLowerCase();
  console.log(str);
  return str;
}

spinalCase('thisIsSpinalTap');
