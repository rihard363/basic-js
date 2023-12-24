const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str !== String(str)) {
    str = String(str);
  };
  let repeatTimes  = options.repeatTimes,
  separator  = options.separator || '+',
  addition = options.addition || '',
  additionRepeatTimes = options.additionRepeatTimes,
  additionSeparator = options.additionSeparator || '|',
  result = '',
  middleResult = str;

  if (separator !== String(separator)) {
    separator = String(separator);
  };

  if (addition !== String(addition)) {
    addition = String(addition);
  };

  if (options.addition === false) {
    addition = false;
  };

  if (options.addition === null) {
    addition = null;
  };


  if (additionSeparator !== String(additionSeparator)) {
    additionSeparator = String(additionSeparator);
  };

  if (repeatTimes === undefined) {
    repeatTimes = 1
  };
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1
  };

    
     for (let j = 0; j < additionRepeatTimes; j++) {
        if (j === additionRepeatTimes - 1) {
            middleResult += addition
        } else {
             middleResult += addition + additionSeparator
        }
      }

    for(let i = 0; i < repeatTimes; i++) {
         if (i === repeatTimes - 1) {
            result += middleResult
        } else {
             result += middleResult + separator
        }
      }
    return result
}

module.exports = {
  repeater
};
