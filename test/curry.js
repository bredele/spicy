
/**
 * Tests dependencies.
 */

var assert = require('assert');
var curry = require('..');

describe("curry", function() {

	it("should evaluate a function", function() {
		var add = curry(function(a, b) {
			return a + b;
		});
		assert.equal(add(1,2), 3);
	});

	it('should partially evaluate a function', function() {
		var add = curry(function(a, b) {
			return a + b;
		});
		var fn = add(1);
		assert.equal(typeof fn, 'function');
		assert.equal(fn(2), 3);
	});
	
});
