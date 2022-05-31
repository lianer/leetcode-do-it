Promise.myReject = function (reason) {
  return new Promise((resolve, reject) => reject(reason));
};
