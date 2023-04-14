/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // let str = '';
  let count = 0;
  let result = '';
  let symbolArr = str.split('');
  let prev = symbolArr?.at(0);
  for (let i = 0; i < symbolArr.length; i++) {
    if (prev === symbolArr[i]) {
      count++;
    } else {
      if (count > 1) {
        result += count;
      }
      result += prev;
      count = 1;
      prev = symbolArr[i];
    }
    if (i === symbolArr.length - 1) {
      result += (count === 1 ? '' : count) + prev;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
