// INPUT: 'a word'
// OUTPUT: 'drow a'

function reverseString(str) {
  //base case
  if(str === '') {
    return '';
  }

  //general case
  const revStr = str.slice(-1);
  return revStr + reverseString(str.slice(0, -1));
}

const result = reverseString('a word');
console.log(result);

// a word   drow a
// d        first letter becomes the last?

// abcd
// abc  return 
// ab   return dc
// a    return d
//      return ''

// str[0] 

// abcd    
// dbca    takes str[0] = str[str.length - 1]
// dcba

// const revStr = str[-1];
// return revStr + reverseString(str.slice(0, -1))