
exports.min = function min (array) {
  // 0 - dummy, can be anything, as we don't need this
  // array - is standard parameter to send parameters to the method
  // standard math takes digits, from 0..n, so in apply array will be
  // transformed in input parameters
  return !array || array.length == 0 ? 0 : Math.min.apply(0, array);
}

exports.max = function max (array) {
  // without appply we can just use ...array -> parse array for separate values for input 
  return !array || array.length == 0 ? 0 :  Math.max(...array);
}

exports.avg = function avg (array) {
  return !array || array.length == 0 ? 0 :  array.reduce((value1, value2) => value1 + value2, 0) / array.length;
}
