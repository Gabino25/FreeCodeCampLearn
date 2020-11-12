let username = "Oceans11";
let userCheck = /^[a-z]+[a-z]$|^[a-z][a-z]+[0-9]$|^[a-z][0-9][0-9]$|^[a-z]+[0-9][0-9]$/ig; // Change this line

let result = userCheck.test(username);
console.log(username.match(userCheck)); 
