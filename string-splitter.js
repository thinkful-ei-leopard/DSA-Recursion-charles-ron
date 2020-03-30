/**
 * 
 * @param {string} str 
 * @param {string} separator 
 */
function stringSplitter(str, separator='/') {
  let index = str.indexOf(separator);
  // base case
  if (index === -1) {
    return [str];
  }
  // general case
  return [str.substring(0, index), ...stringSplitter(str.substring(index + 1), separator)];
}

const result = stringSplitter('12/20/2020');
console.log(result);
