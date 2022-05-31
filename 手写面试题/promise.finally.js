Promise.prototype.myFinally = function (callback) {
  return this.then(callback, callback);
};
