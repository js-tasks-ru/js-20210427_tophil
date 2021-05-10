/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arr = path.split('.');
  let i = 0;

  function getPart(obj) {
    if (i == arr.length - 1) {
      return obj ? obj[arr[i]] : undefined;
    } else {
      i++;
      return getPart(obj[arr[i-1]]);
    };
  }
  return function(obj) {
    return getPart(obj);
  };
}


