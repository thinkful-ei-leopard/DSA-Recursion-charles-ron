/**
 * 
 * @param {string} str 
 * @param {string} separator 
 */
function stringSplitter(str, separator) {
  if(str.length === 0) {
    return [];
  } 

  const newStr = str[0]; 
  // if newString is === separator, then skip that element and put the newString in an array  (might want to use ...spreadOperator), then continue
  if (newStr === '/') {  // we can change '/' to separator variable
    console.log('SEPARATOR');
    console.log(str.slice(1));
    return [newStr.slice(1), ...stringSplitter(str.slice(1))];
  }
  // if newString is NOT === separator, then pass it to stringSplitter
  // console.log(newStr);
  return newStr + stringSplitter(str.slice(1));
}

const result = stringSplitter('12/20/2020');
console.log(result);

// INPUT: 02/20/2020
// separator: /
// OUTPUT: ["02", "20", "2020"]

// INPUT: 02 20 2020
// separator: ' '
// OUTPUT: ["02", "20", "2020"]

// let newStr = str[0]
// check str[0] = separator ?
// 
// newString = first letter of string



// 02/20/2020
// 0     RETURN 0            02/20/2020        const newStr = str.slice(1)
// 02    RETURN 02           2/20/2020         returnn newStr + stringSplitter(str.splice(0, 1))
// 02/   RETURN ["02"]       /20/2020
// 2     RETURN 2            20/2020
// 20     RETURN 0            0/2020
// 20/   RETURN ["02", "20"] /2020
// 2     RETURN 2            2020
// 20     RETURN 0            020
// 202     RETURN 2            20
// 2020     RETURN 0            0
// end   RETURN ["02", "20", "2020"]     (str.length===0)