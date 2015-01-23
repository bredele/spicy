
/**
 * Native function binding.
 * Curry arguments by default.
 * @type {Function}
 */

var bind = Function.prototype.bind;


/**
 * Curry function.
 *
 * Also provide an optional arity
 * (useful for variadic functions).
 *
 * Examples:
 *
 *   var add = curry(function(a, b) {
 *     return a + b;
 *   });
 *   add(1,2);
 *   add(1)(2);
 *
 * @param {Function} fn
 * @param {Number?} arity
 * @return {Function}
 * @api public 
 */

module.exports = function(fn, arity) {
  var length = arity || fn.length;
  var curry = function() {
    var args = [].slice.call(arguments);
    var l = args.length;
    if(l < length) {
      return bind.apply(curry, [,].concat(args));
    }
    return fn.apply(null, args);
  };
  return curry;
};
