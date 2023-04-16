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

  calculateDepth(arr) {
    const startCount = 0;
    let result = arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        let curDepth = this.calculateDepth(cur);
        if (curDepth > acc) {
          acc = curDepth;
        }
      }
      return acc;
    }, startCount);
    return (result || 0) + 1;
  }
}

module.exports = {
  DepthCalculator
};
