

function nthTriangle(n){

  // base case
  if(n === 0) {
    return 0;
  }
  if(n < 0) {
    return 'n must be a positive integer';
  }
  // general case
  return n + nthTriangle(n - 1);
}

const result = nthTriangle(4);
console.log(result);


// INPUT: n = 5
// OUTPUT: 
// INPUT(n) OUTPUT                 ACTUAL OUTPUT PER LINE
//  0        0         nothing     
//  1        1         *           1
//  2        3        * *          2
//  3        6       * * *         3        
//  4        10     * * * *        4
//  5        15    * * * * *       5
//  