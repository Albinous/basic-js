const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArr = [];
  for (let i = 0; i < domains.length; i++) {
      newArr.push(domains[i].split('.').reverse());
  }
  newArr = newArr.flat();
  let domain = '';
  let result = [];
  let obj = {};
  newArr.forEach(elem => {
      if (!domain.includes(elem)) {
          domain = domain + '.' + elem;
      } else {
          domain = '';
          domain = domain + '.' + elem;
      }
      result.push(domain);
  });

  for (let i = 0; i < result.length; i++) {
      let el = result[i];
      if (obj[el] != undefined) {
          ++obj[el];
      } else {
          obj[el] = 1;
      }
  }

  return obj;
}

module.exports = {
  getDNSStats
};
