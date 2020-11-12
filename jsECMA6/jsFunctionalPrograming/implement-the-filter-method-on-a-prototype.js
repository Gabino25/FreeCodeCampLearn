// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  for(let i=0;i<s.length;i++){
    if(callback(s[i])){
      newArray.push(s[i]);
    }
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
