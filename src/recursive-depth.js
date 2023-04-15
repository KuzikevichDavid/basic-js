/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // calc(arr) {
  //   let count = 0;
  //   let result = arr.reduce((acc, cur) => {
  //     if (Array.isArray(cur)) {
  //       let curDepth = this.calc(cur) + 1;
  //       if (curDepth > acc) {
  //         acc = curDepth;
  //       }
  //     }
  //     count++;
  //     return acc;
  //   }, 0);
  //   return result;
  // }

  // calculateDepth(arr) {
  //   let depth = this.calc(arr);
  //   let result = (depth || 0) + 1
  //   return result;
  // }


  calculateDepth(arr, prevCount = 1) {
    let count = 0;
    let result = arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        let curDepth = this.calculateDepth(cur, 0) + 1;
        if (curDepth > acc) {
          acc = curDepth;
        }
      }
      count++;
      return acc;
    }, prevCount);
    if (count > 0)
      return result + prevCount;
    else
      return 1;
  }
}

const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

console.log(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);

module.exports = {
  DepthCalculator
};
