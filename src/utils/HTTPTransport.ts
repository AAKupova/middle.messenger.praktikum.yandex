interface Headers {
  [key:string]: string;
}

interface Options {
  data?: string,
  timeout?: number,
  headers?: Headers,
  method?: string;
}

const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

const queryStringify = (data: any) => {
  return `?${Object.keys(data).map(key => `${key}=${data[key]}`).join('&')}`;
};

export class HTTPTransport {
  get = (url: string, options:Options = {}, ...args:unknown[]) => {
    console.log(...args);
    const { data, ...rest } = options;
    return (
      this.request(`${url}${queryStringify(data)}`,
      { ...rest, method: METHODS.GET }, options.timeout)
    );  
  };

  put = (url:string, options:Options = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url:string, options:Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url:string, options:Options = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url:string, options: Options = {}, timeout = 5000) => {
    const { method = '', data, headers = {}} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = timeout;
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.open(method, url);
      if(method){
        if (method === 'GET' || !data) {
          xhr.send();
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  };
}
