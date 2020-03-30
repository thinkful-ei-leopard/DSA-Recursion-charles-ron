
function powerCalculator(base, exponent){
  // base case
  if( exponent < 0){
    return 'exponent should be >= 0';
  }
  if( exponent === 0){
    return base = 1;
  }

  return base * powerCalculator(base, exponent -1 );
}

const result = powerCalculator(10,-1);
console.log(result);

// 10 * 10 <== do that for each exponent
// do the same thing, with expononet - 1
// keep doing that until exponent === 0

// 10 ^ 4 = 10000     10 * 1000     return 10 * RESULT        return base * powerCalculator()
// 10 ^ 3 = 1000      10 * 100      return 10 * RESULT
// 10 ^ 2 = 100       10 * 10       return 10 * RESULT
// 10 ^ 1 = 10        10 * 1        return 10 * RESULT
// 10 ^ 0 = 1                       return 1
//                   

