const sum = function() {
  let result = 0;
  const nums = Array.from(arguments);

  if (nums.length ===0) return undefined;
  nums.forEach( (el) => result += el );
  return result;
}

// console.log(sum(1,2,3,4,5));

const sum2 = function (...nums) {
  let result = 0;
  // const nums = Array.from(arguments);

  if (nums.length === 0) return undefined;
  nums.forEach((el) => result += el);
  return result;
}

// console.log(sum2(1, 2, 3, 4, 5));


