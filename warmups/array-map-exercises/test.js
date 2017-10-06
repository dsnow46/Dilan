var chai = require("chai");
var assert = chai.assert;

var maps = require("./index.js");

describe("array", () => {
    it("shoudl double all numbers in the array", () => {
        assert.deepEqual(maps.doubleNumbers([1]), [2]);
    });
});


describe("map ex 2", () => {
    it("should turn array to string", () => {
        assert.deepEqual(maps.stringItUp([]), []);
    });
});







//    it("should add two numbers!", function() {
//        assert.equal(calculator.add(1, 1), 2);
//        assert.equal(calculator.add(-1, -2), -3);
//        assert.equal(calculator.add(1, 4), 5);
//    });
