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
  let result = {};
  domains.forEach(element => {
    let index = element.length - 1;
    let prev = '';
    while (index >= 0) {
      let newIndex = element.lastIndexOf('.', index);
      if (newIndex !== -1) {
        prev += element.slice(newIndex, index + 1);
      } else {
        prev += '.' + element.slice(0, index + 1);
      }
      if (prev in result) {
        result[prev]++;
      } else {
        result[prev] = 1;
      }
      index = newIndex - 1;
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
