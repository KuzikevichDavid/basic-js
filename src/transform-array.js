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
function isCommand(command) {
  switch (command) {
    case '--discard-prev':
      return true;
    case '--double-prev':
      return true;
    case '--double-next':
      return true;
    case '--discard-next':
      return true;
    default:
      return false;
  }
}

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let arrCopy = arr.slice();
  let result = arr.slice();
  for (let i = 0, j = 0; i < arrCopy.length; i++, j++) {
    switch (arrCopy[i]) {
      case '--discard-prev':
        if (i - 1 in arrCopy && !isCommand(arrCopy[i - 1])) {
          arrCopy.splice(i - 1, 1);
          result.splice(j - 1, 2);
          i--;
        } else {
          arrCopy.splice(i, 1);
          result.splice(j, 1);
          i--;
        }
        break;
      case '--double-prev':
        if (i - 1 in arrCopy && !isCommand(arrCopy[i - 1])) {
          arrCopy[i] = arrCopy[i - 1];
          result[j] = result[j - 1];
        } else {
          arrCopy.splice(i, 1);
          result.splice(j, 1);
          i--;
        }
        break;
      case '--double-next':
        if (i + 1 in arrCopy && !isCommand(arrCopy[i + 1])) {
          arrCopy[i] = arrCopy[i + 1];
          result[j] = result[j + 1];
        }
        else {
          arrCopy.splice(i, 1);
          result.splice(j, 1);
          i--;
        }
        break;
      case '--discard-next':
        if (i + 1 in arrCopy && !isCommand(arrCopy[i + 1])) {
          arrCopy.splice(i + 1, 1);
          result.splice(j, 2);
          i--;
        } else {
          arrCopy.splice(i, 1);
          result.splice(j, 1);
          i--;
        }
      default:
        break;
    }
  }
  return result;
}

/* function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let arrCopy = arr.slice();
  // let result = [];
  for (let i = 0; i < arrCopy.length; i++) {
    switch (arrCopy[i]) {
      case '--discard-prev':
        if (i - 1 in arrCopy) {
          arrCopy.splice(i - 1, 2);
          i -= 2;
        } else {
          arrCopy.splice(i, 1);
          i--;
        }
        break;
      case '--double-prev':
        if (i - 1 in arrCopy) {
          arrCopy[i] = arrCopy[i - 1];
        } else {
          arrCopy.splice(i, 1);
          i--;
        }
        break;
      case '--double-next':
        if (i + 1 in arrCopy) arrCopy[i] = arrCopy[i + 1];
        else {
          arrCopy.splice(i, 1);
          i--;
        }
        break;
      case '--discard-next':
        if (i + 1 in arrCopy) arrCopy.splice(i + 1, 1);
        arrCopy.splice(i, 1);
        i--;
      default:
        break;
    }
  }
  return arrCopy;
} */

const cases = {
  doubleDiscarded: {
    input: [1, 2, 1, '--discard-next', 1337, '--double-prev', 4, 5],
    output: [1, 2, 1, 4, 5]
  },
  doubleDoubled: {
    input: [1, 2, 2, '--double-next', 1337, '--double-prev', 4, 5],
    output: [1, 2, 2, 1337, 1337, 1337, 4, 5]
  },
  discardDiscarded: {
    input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
    output: [1, 2, 3, 4, 5]
  },
  discardDoubled: {
    input: [1, 2, 4, '--double-next', 1337, '--discard-prev', 4, 5],
    output: [1, 2, 4, 1337, 4, 5]
  }
};

Object.values(cases).forEach(currCase => {
  const { input, output } = currCase;
  console.log(transform(input), output);
});

module.exports = {
  transform
};
