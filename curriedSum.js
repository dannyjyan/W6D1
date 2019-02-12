const curriedSum = function (numArgs) {
  const numbers = [];

  const _curriedSum = num => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce( (acc,el) => acc + el );
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
    
}

console.log(curriedSum(3)(5)(6)(6));
// const s = curriedSum(3);
