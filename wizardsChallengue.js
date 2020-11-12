//JavaScript Nodejs v10.x

/**
* @param {number} src
* @param {number} dest
* @param {number[][]} wizards
* @return {minCost, [] = minPath}
*/
var distance_path = function(src, dest, wizards) {
   let minCost = 0;
   let minPath = [];
    console.log("src:",src);
    console.log("dest:",dest);
    console.log("wizards:",wizards);
   // Put your code here to calculate minCost and minPath
    
   // Return the result, do not change the structure
   return { minCost: minCost, minPath: minPath };
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let src;
let dest;
let grid = [];
let i = 0;
rl.on('line', (line) => {
    i === 0 ? src = parseInt(line) : (i === 1 ? dest = parseInt(line) : grid.push(line.split('').map(x=>+x)));
    i++;
});

rl.on('close', () => {
    let result = distance_path(src, dest, grid);
    console.log(result.minCost + ' ' + result.minPath.join(''));
});


Compiling...
Test case 1 output:src: 0
dest: 9
wizards: [ [ 1, 2, 3 ],
  [ 8, 6, 4 ],
  [ 7, 8, 3 ],
  [ 8, 1 ],
  [ 6 ],
  [ 8, 7 ],
  [ 9, 4 ],
  [ 4, 6 ],
  [ 1 ],
  [ 1, 4 ] ]
0
Expected result: 23 01469 ==> Failed.
==========================================================================
Final Result: 0/1 (0%)