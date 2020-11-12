var Person = function(firstAndLast) {
  // Only change code below this line
  let firstName = firstAndLast.split(" ")[0]; 
  let lastName = firstAndLast.split(" ")[1]; 
 
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    console.log("Entra getFullName");
    console.log("firstName",firstName);
    console.log("Sale getFullName");
    return firstName+" "+lastName;
    
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };

  this.setFullName = function(p){
    firstName = p.split(" ")[0]; 
    lastName = p.split(" ")[1]; 
  }
  this.setFirstName = function(p){
    firstName = p; 
  }
  this.setLastName = function(p){
    lastName = p;
  }
};

var bob = new Person('Bob Ross');
console.log(bob);
console.log(bob.getFullName());
bob.setFullName("Haskell Ross");
console.log(bob.getFullName());