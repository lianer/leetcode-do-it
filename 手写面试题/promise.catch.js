Promise.prototype.myCatch = function (callback) {
  return this.then(null, callback);
};
