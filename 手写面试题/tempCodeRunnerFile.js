console.log(1);
new Promise2(function (resolve, reject) {
  console.log(2);
  resolve('lianer');
}).then(
  (result) => {
    console.log(3);
    console.log(result);
  },
  (e) => {
    console.log(e);
  },
);

console.log(4);
