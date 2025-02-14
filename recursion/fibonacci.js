const fibonacci = (function () {
  const fibs = (n) => {
    let array = [0, 1];

    if (n<=1) return [0];

    for (let i = 2; i < n; i++) {
      array.push(array[i - 2] + array[i - 1]);
    }
    return array;
  }

  const fibsRec = (n, array = [0, 1]) => {
    if (n <= 1) return [0];
    if (n === 2) return array;
    
    return fibsRec(n - 1, [...array, array[array.length - 1] + array[array.length - 2]]);
  };
  
  return {fibs, fibsRec};
})();

console.log(fibonacci.fibs(8));     
console.log(fibonacci.fibsRec(8));