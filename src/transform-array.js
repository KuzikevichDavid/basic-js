/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let flagArr = Array(arr.length);
  let result = [];
  for (let i = 0, j = 0; i < arr.length; i++, j++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (i - 1 in arr) {
          if (flagArr[i - 1]) {
            flagArr[i - 1] = false;
            result.splice(i - 1, 1);
          }
        }
        flagArr[i] = false;
        break;
      case '--double-prev':
        if (i - 1 in arr) {
          if (flagArr[i - 1]) {
            result.push(arr[i - 1]);
          }
        }
        flagArr[i] = false;
        break;
      case '--double-next':
        if (i + 1 in arr) {
          flagArr[i + 1] = true;
          result.push(arr[i + 1]);
        }
        flagArr[i] = false;
        break;
      case '--discard-next':
        if (i + 1 in arr) {
          flagArr[i + 1] = false;
        }
        flagArr[i] = false;
        break;
      default:
        if (i in flagArr && !flagArr[i]) { break; }
        result.push(arr[i]);
        flagArr[i] = true;
        break;
    }
  }
  return result;
}

module.exports = {
  transform
};
