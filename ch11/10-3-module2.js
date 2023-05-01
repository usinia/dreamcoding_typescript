/*
import run, { print as printMessage } from "./10-3-module1.js";

// const test = add(1, 2);
const test = run(1, 2);
console.log(test);

printMessage();
*/

import * as calculator from "./10-3-module1.js";
console.log(calculator);
console.log(calculator.default(1, 2));
calculator.print();
console.log(calculator.number);
