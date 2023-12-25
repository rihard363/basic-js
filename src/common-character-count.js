const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  str = s2.split('')
  for ( let i = 0; i < s1.length; i++) {
    if ( str.includes(s1[i])) {
        count += 1
    }
    for(let j = 0; j < str.length; j++) {
        console.log (s1[i], str[j])
      if (str[j] === s1[i]) {
        str.splice(j,1)
        break
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
