const max = process.argv[2];

let FizzBuzz = function*(){
  // define inital value in block scope
  let num = 1;
  while (num <= max) {
    // find value to return from this iteration
    let val = num;
    val = val % 15 === 0 ? 'FizzBuzz' : val % 5 === 0 ? 'Buzz' : val % 3 === 0 ? 'Fizz' : val;
    // increment counter 
    num++;
    // 'value' in return object is return value of iteration
    yield val;
  }
}(); // <-- NB function is called here, so return value is assigned to FizzBuzz var, not function

for (var n of FizzBuzz) {
  console.log(n);
}

// generators are pretty convenient! iterate with 'for..of' again