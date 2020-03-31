/**
 * @param {number} num integer number of the fibonacci sequence
 */
function fibonacci(num) {
  // base case
  if(num === 1){
    return [0, 1];
  }
  if(num < 1) {
    return 'num must be a number greater than 1';
  }
  // general case
  let sequence = fibonacci(num - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2] );
  return sequence;
}

const result = fibonacci(4);
console.log(result);
// INPUT: number 4
// OUTPUT: [1, 1, 2, 3]

// INPUT: 4
// OUTPUT: [1, 1, 2, 3]
// 1 [1]
// 2 [1, 0+1]
// 3 [1, 1, 1+1]
// 4 [1, 1, 2, 1+2]
// 5 [1, 1, 2, 3, 2+3]


// INPUT OUTPUT 
// 1     [1]       1             Fn = Fn-1 + Fn-2      Fn-2 = Fn - Fn-1
// 2     [1, 1]       1+0
// 3     [1, 1, 2]     1+1
// 4     [1, 1, 2, 3]       2+1
// 5     [1, 1, 2, 3, 5]       3+2
// 6     [1, 1, 2, 3, 5, 8]       5+8             PREVOUS ARRAY, ...newFibonacci
// 7     [1, 1, 2, 3, 5, 8, 13]      8+5