/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let digitArr = (str).split('');
  let combinations = digitArr.map((v, i, a) => {
    return a.reduce((ac, c, ii) => {
      return ac += ii !== i ? c : ''
    }, '')
  });
  let sorted = combinations.sort();
  return Number.parseInt(sorted[sorted.length - 1]);
}

module.exports = {
  deleteDigit
};
