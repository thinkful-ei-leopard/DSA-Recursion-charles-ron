
function powerCalculator(base, exponent){
  // base case
  if( exponent < 0){
    return console.log('exponent should be >= 0');
  }
  if( exponent === 0){
    return base = 1;
  }
  const powerBase = base;
  console.log(base * powerBase);

  powerCalculator(base, exponent - 1);
  // return base * powerCalculator(base, exponent -1 );
}

powerCalculator(10,3);

// 10 * 10 <== do that for each exponent
// do the same thing, with expononet - 1
// keep doing that until exponent === 0

// 10 ^ 4 = 10000     10 * 1000     return 10 * RESULT
// 10 ^ 3 = 1000      10 * 100      return 10 * RESULT
// 10 ^ 2 = 100       10 * 10       return 10 * RESULT
// 10 ^ 1 = 10        10 * 1        return 10 * RESULT
// 10 ^ 0 = 1                       return 1
//                   

