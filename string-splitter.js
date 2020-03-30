/**
 * 
 * @param {string} str 
 * @param {string} separator 
 */
function stringSplitter(str, separator) {
  let newArray = [];
  if(str.length === 0) {
    return newArray;
  } 
  // 12/01/2020
  // 1 + stringSplitter(2/01/2020)
  // 2 + stringSplitter(/01/2020)
  // /                  01/2020

  const newStr = str[0]; //   12/
  if (newStr === '/') {  // we can change '/' to separator variable
    // add newStr to array
    console.log('SEPARATOR');
    newArray = [...newStr];    // ["12"] 
  }

  return newStr + stringSplitter(str.slice(1));
  // abc
  // return a + stringSplitter(bc)
  // retrun b + stringSplitter(c)
  // return c
  // return ''


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
// if newString is === /, then skip that element and put the newString in an array  (might want to use ...spreadOperator)
// if newString is NOT === /, then pass it to stringSplitter

// 02/20/2020
// 0     RETURN 0            02/20/2020        const newStr = str.slice(1)
// 2     RETURN 02           2/20/2020         returnn newStr + stringSplitter(str.splice(0, 1))
// '/'   RETURN ["02"]       /20/2020
// 2     RETURN 2            20/2020
// 0     RETURN 0            0/2020
// '/'   RETURN ["02", "20"] /2020
// 2     RETURN 2            2020
// 0     RETURN 0            020
// 2     RETURN 2            20
// 0     RETURN 0            0
// end   RETURN ["02", "20", "2020"]     (str.length===0)