var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './ex5mod';
console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));

// export default lets you use expor the whole module, common.js style. That's nice.