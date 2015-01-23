
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

	it('should partially evaluate a function with 2 arguments', function() {
		var add = curry(function(a, b) {
			return a + b;
		});
		var fn = add(1);
		assert.equal(typeof fn, 'function');
		assert.equal(fn(2), 3);
	});

	it('should partially evaluate a function with n arguments', function() {
		var add = curry(function(a, b, c) {
			return a + b + c;
		});
		assert.equal(add(1)(3)(4), 8);
	});

	it('should work with variadic functions', function() {
		var add = curry(function() {
			var result = 0;
			for(var i = 0; i < arguments.length; i++) {
				result += arguments[i];
			}
			return result;
		}, 5);
		assert.equal(add(1,2)(3)(4, 5), 15);
	});
	
});
