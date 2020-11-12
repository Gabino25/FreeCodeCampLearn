let sampleWord = "astr1on11aut";
let pwRegex = /^[a-z]{1}\w{1,}(?=)(?=[0-9]{2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(pwRegex.test(sampleWord)); 
console.log(sampleWord.match(pwRegex)); 
