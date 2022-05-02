const { NotImplementedError } = require('../extensions/index.js');

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
  n = n.toString().split('')
  let newArr = [];
  
  for (let i = 0; i < n.length; i++) {
      newArr.push(+n[i]);
  }

  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < newArr[i + 1]) {
          newArr.splice(i, 1);
          break;
      } else if (newArr[i] > newArr[i + 1]) {
        newArr.splice(i + 1, 1);
        newArr[i].toString();
        break;
      }
  }

  return +newArr.join('');
}

module.exports = {
  deleteDigit
};
