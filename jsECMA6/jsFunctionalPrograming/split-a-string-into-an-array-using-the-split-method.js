/**\W Matches any character that is not a word character from the basic Latin alphabet
**/
function splitify(str) {
  // Only change code below this line
  console.log(str);
  let array = str.split(/\W/);
  console.log(array);
  return array; 
  // Only change code above this line
}
splitify("Hello World,I-am code");
