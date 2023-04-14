/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  n += '';
  let result = n.split('').reduce((acc, cur) => acc += Number.parseInt(cur), 0) + '';
  if (result.length > 1) {
    return getSumOfDigits(result);
  }
  return Number.parseInt(result);
}

module.exports = {
  getSumOfDigits
};
