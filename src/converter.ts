/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let result: number | undefined;
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  if (isNaN(value)) {
    throw new Error('Invalid value');
  }
  if (from === 'm') {
    if (to === 'mi') {
      result = value / 1609.34;
    } else if (to === 'm') {
      result = value;
    }
  } else if (from === 'mi') {
    if (to === 'm') {
      result = value * 1609.34;
    } else if (to === 'mi') {
      result = value;
    }
  } else if (from === 'gr') {
    if (to === 'pound') {
      result = value / 453.592;
    } else if (to === 'gr') {
      result = value;
    }
  } else {
    if (from === 'pound') {
      if (to === 'gr') {
        result = value * 453.592;
      } else if (to === 'pound') {
        result = value;
      }
    } else if (from === 'C') {
      if (to === 'K') {
        result = value + 273.15;
      } else if (to === 'C') {
        result = value;
      }
    } else if (from === 'K') {
      if (to === 'C') {
        result = value - 273.15;
      } else if (to === 'K') {
        result = value;
      }
    }
  }
  if (result === undefined) {
    throw new Error();
  }
  return parseFloat(result.toFixed(2));
};
