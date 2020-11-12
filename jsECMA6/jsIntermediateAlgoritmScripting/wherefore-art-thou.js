function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  console.log(source);
  let arrKeys = Object.keys(source);
  console.log(arrKeys);
  arr = collection.filter(function(obj){
   return arrKeys.every((p)=>(obj.hasOwnProperty(p)&&obj[p]===source[p]));
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
