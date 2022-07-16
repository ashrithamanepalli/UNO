const xhrGet = (path, data = '', callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      callBack(xhr);
    }
    return;
  });
  xhr.open('GET', path);
  xhr.send(data);
};

const xhrPost = (path, data, callBack) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      callBack(xhr);
    }
    return;
  });
  xhr.open('POST', path);
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  xhr.send(data);
};
