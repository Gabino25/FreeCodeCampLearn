function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

function destroyer(arr) {
  console.log(arguments);
  console.log(arguments.length);
  for(let i=1;i<arguments.length;i++){
   arr = arr.filter(p=>p!==arguments[i]);
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
