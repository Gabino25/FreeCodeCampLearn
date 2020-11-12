function sentensify(str) {
  // Only change code below this line
  console.log(str); 
  let array = str.split(/\W/);
  console.log(array); 
  return array.join(" ");
  // Only change code above this line
}
sentensify("The.force.is.strong.with.this.one");
