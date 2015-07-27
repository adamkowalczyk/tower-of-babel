var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

function avg(...args2) {
  let len = args2.length;
  let sum = args2.reduce( (prev, cur) => prev + cur);
  return sum/len;
}

console.log(avg(...args));

// bit odd. we seem to be going out of our way to make a comma separated list of arguments that we turn back into an array!