// capitalizeFirst.js

const assert = require('assert');


// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirst, 'function');


// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirst.length, 1);


// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(capitalizeFirst('javaScript est génial'), 'JavaScript Est Génial');


// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirst('z'), 'Z');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirst(''), '');