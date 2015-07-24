var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI} from './ex4mod.js';
import {sqrt} from './ex4mod.js';
import {square} from './ex4mod.js';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));

// don't forget the curly braces when importing!