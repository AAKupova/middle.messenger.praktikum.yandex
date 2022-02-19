import { Options } from '../types/type';

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export class HTTPTransport {
  get = (url: string, options: Options = {}) => {
    return (
      this.request(`${url}`,
        { method: METHODS.GET }, options.timeout)
    );
  };

  put = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options = {}, timeout = 5000) => {
    const { method = '', data, formData, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = timeout;
      xhr.withCredentials = true;

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      };

      xhr.open(method, url);
      xhr.withCredentials = true;

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      if (method) {
        if (method === 'GET' && (!data && !formData)) {
          xhr.send();
        } else if (formData) {
          xhr.send(formData);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });

  };
}
