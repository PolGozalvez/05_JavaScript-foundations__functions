//import and execute
import isTypeOf from './isTypeOf.js';

console.log("=======================")
console.log("isTypeOf", isTypeOf([1], 'array'));
console.log("isTypeOf", isTypeOf(42, 'number'));
console.log("isTypeOf", isTypeOf('Hola', 'string'));
console.log("isTypeOf", isTypeOf(true, 'boolean'));
