import { HTTPTransport } from '../../utils/HTTPTransport';

export default class Api {
  baseUrl: string;
  feach: HTTPTransport;
  headers: object;

  constructor () { 
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
    this.feach = new HTTPTransport();
    this.headers = {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    };
  }

  // create() { throw new Error('Not implemented'); }

  // request() { throw new Error('Not implemented'); }

  // update() { throw new Error('Not implemented'); }

  // delete() { throw new Error('Not implemented'); }
}