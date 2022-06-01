const ajax = function (url, methods = 'GET', sync = false) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(methods.toUpperCase(), url, sync);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadstatechange = function () {
      if (xhr.readystate === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.responseText));
        }
      }
    };

    xhr.send();
  });
};
