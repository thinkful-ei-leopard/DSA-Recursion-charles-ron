function fibonacci(num) {
  if(num < 0) {
    return 'num must be a positive integer';
  }

  if(num <= 1){
    return 1;
  }
//   console.log(Number(fibonacci(num - 1).slice(-1)));
//   console.log(fibonacci(num - 2).slice(-1));
//   console.log(Number(fibonacci(num - 1).slice(-1) + fibonacci(num - 2).slice(-1)));
  //let results = Number(fibonacci(num - 1).slice(-1)) + Number(fibonacci(num - 2).slice(-1));
  return [fibonacci(1), ...fibonacci(num - 1) + fibonacci(num - 2)];
  //return [...fibonacci(1), ...(Number(fibonacci(num - 1).slice(-1)) + Number(fibonacci(num - 2).slice(-1)))];
}

const result = fibonacci(3);
console.log(result);