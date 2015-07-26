const max = process.argv[2];

let FizzBuzz = {
	[Symbol.iterator]() {
		// define inital value in block scope
		let num = 1;
		return {
			next() {
				// return required 'next' function
				if (num <= max) {
					// find value to return from this iteration
					let val = num;
					val = val % 15 === 0 ? 'FizzBuzz' : val % 5 === 0 ? 'Buzz' : val % 3 === 0 ? 'Fizz' : val;
					// increment counter 
					num++;
					// 'value' in return object is return value of iteration
					return {done: false, value: val}; 
				}
				else {
					return {done: true};
				}
			}
		};
	}
};

for (var n of FizzBuzz) {
	console.log(n);
}

// for..of iterates over *any* iterator