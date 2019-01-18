//what happens if you use var instead of const?
const assert = require('assert'); // a try catch. makes sure it will be the type required by the problem
const{ Before,Given, When,Then } = require('cucumber');
const Calculator = require('C:\\Users\\Berna\\FullScreenQAChall\\features\\calculator.js');

let calculator;

Given('the numbers {int} and {int}', function (int, int2, callback) {
    calculator = new Calculator(int, int2);
    callback();
});


When('they are added together', function () {
    calculator.add();
});

Then('the result should be {int}', function (expected) {
    assert.equal(calculator.getResult(),expected)
});
