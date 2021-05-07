/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size != undefined) {
    let counter = 0;
    let newStr = '';
    let prevChar = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === prevChar) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter < size) {
        newStr += string[i];
        prevChar = string[i];
      }
    }
    return newStr;
  } else {
    return string;
  }
}


