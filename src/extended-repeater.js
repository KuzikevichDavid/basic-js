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
function replicate(str, count, sep) {
  let result = '';
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      result += str;
      break;
    }
    result += str + sep;
  }
  return result;
}

function repeater(str, options) {
  let count = options?.repeatTimes || 1;
  let sep = options?.separator || '+';
  let addition = 'addition' in options ? options.addition : '';
  let addCount = options?.additionRepeatTimes || 1;
  let addSep = options?.additionSeparator || '|';
  return replicate(str + replicate(addition, addCount, addSep), count, sep);
}

module.exports = {
  repeater
};
