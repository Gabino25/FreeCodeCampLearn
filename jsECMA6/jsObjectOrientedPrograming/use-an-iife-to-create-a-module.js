let funModule = (function (){
  return {
    isCuteMixin:function(obj) {
        obj.isCute = function() {
          return true;
        };
      }
    ,singMixin :function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
   }
  }
}
)();


console.log(funModule); 
console.log(funModule.isCuteMixin);
console.log(funModule.singMixin);