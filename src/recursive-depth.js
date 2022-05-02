const { NotImplementedError } = require('../extensions/index.js');

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
    let calc = 0;
    let depth = 0;
    if(Array.isArray(arr)) {
      for(let i=0;i<arr.length; i++) {
        calc = this.calculateDepth(arr[i])
        if(calc>depth) {
          depth = calc
        }
      }
      return depth+1
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
