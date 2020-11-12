let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
console.log(hello.match(wsRegex)); 
let result = hello.replace(wsRegex, '$2');