//function assert(actual, expected) {
//    if (actual !== expected) {
//        throw {
//            type: "Failure!",
//            details: {
//                actual: actual,
//                expected: expected
//            }
//        };
//    } else {
//        console.log("Test Passed.");
//    }
//};
//
////assert(true, true);
////assert(true, false);
////assert(true, true);
////assert(true, true);
//
//function describe(message, testFunc) {
//    try {
//        testFunc();
//    } catch (err) {
//        console.log("FAILURE!", err);
//    }
//};
//
//function add(a, b) {
//    return a + b;
//}
//
//describe("testing the add function!", function () {
//    assert(add(1, 2), 3);
//    assert(add(1, 5), 6);
//    assert(add(1, 7), 8);
//    assert(add(-1, -2), -3);
//});
//
//function multiply(a, b) {
//    return a * b;
//}
//
//describe("testing the multiply function!", function () {
//    assert(multiply(5, 3), 15);
//    assert(multiply(5, 3), 15);
//});
//
//function subtract(a, b) {
//    return a - b;
//}
//
//describe("testing the subtract function!", function () {
//    assert(subtract(5, 3), 2);
//});
//
//function divide(a, b) {
//    return a / b;
//}
//
//describe("testing the subtract function!", function () {
//    assert(divide(20, 5), 4);
//});

var chai = require("chai");
var assert = chai.assert;

function isPlaindrome(str) {
    return str.toLowerCase().split("").reverse().join("").replace(/\W/g, "") === str.toLowerCase().replace(/\W/g, "");
}


describe('Checks Palindrome', function(){
    it("should have the same chars forward and back", function() {
    assert.equal(isPlaindrome("Star Rats"), true)
    });
    it("should have the same chars forward and back", function() {
    assert.equal(isPlaindrome("A man, a plan, a canal panama"), true)
    });
})
