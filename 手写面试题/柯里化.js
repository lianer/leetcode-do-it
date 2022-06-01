// https://zhuanlan.zhihu.com/p/348658148

function sum(...args) {
  let sum = args.reduce((a, b) => a + b);
  return function (...args) {
    return sum + args.reduce((a, b) => a + b);
  };
}

console.log(sum(1, 2)(3));
