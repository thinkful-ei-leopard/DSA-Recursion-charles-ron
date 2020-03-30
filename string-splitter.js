/**
 * 
 * @param {string} str 
 * @param {string} separator 
 */
function stringSplitter(str, separator) {

}

const result = stringSplitter();
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
// if newString is NOT === /, then pass it to

// 02/20/2020
// 0     RETURN 0
// 2     RETURN 02
// '/'   RETURN ["02"]
// 2     RETURN 2
// 0     RETURN 0
// '/'   RETURN ["02", "20"]
// 2     RETURN 2
// 0     RETURN 0
// 2     RETURN 2
// 0     RETURN 0
// end   RETURN ["02", "20", "2020"]     (str.length===0)