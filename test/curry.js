
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
	
});
