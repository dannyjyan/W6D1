Function.prototype.curry = function(numArgs){
  const arr = [];
  let that = this;
  const _curryFunc = function(){
    const argArr = Array.from(arguments);
    // arr = arr.concat(argArr);
    argArr.forEach((el)=> arr.push(el));
    if (arr.length >= numArgs){
      return that.call("",...arr);
      // return that.apply("", arr);
    } else {
      console.log(arr);
      return _curryFunc;
    }
  }
  return _curryFunc;
}

Function.prototype.curry = function (numArgs) {
  const arr = [];
  const _curryFunc = (...args) => {
    args.forEach((el) => arr.push(el));
    // arr = arr.concat
    if (arr.length >= numArgs) {
      return this.call(this, ...arr);
      // return that.apply("", arr);
    } else {
      // console.log(arr);
      return _curryFunc;
    }
  }
  return _curryFunc;
}


// sum(5)(30,20,1)

const sumThree = function(e1,e2,e3) {return e1+e2+e3};
const curriedSum = sumThree.curry(3);
// console.log(curriedSum(2, 3, 24)(2)(4));
console.log(curriedSum(2,3)(24,3,4));
let a = sumThree.curry(3);
// a = a.curriedSum(2,3,4);
// a.curriedSum(2); 
// a.curriedSum(2);