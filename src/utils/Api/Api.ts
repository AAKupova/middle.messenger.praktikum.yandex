import { HTTPTransport } from '../HTTPTransport';

export default class Api {
  baseUrl: string;
  feach: HTTPTransport;
  headers: object;

  constructor () { 
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
    this.feach = new HTTPTransport();
  }

  // create() { throw new Error('Not implemented'); }

  // request() { throw new Error('Not implemented'); }

  // update() { throw new Error('Not implemented'); }

  // delete() { throw new Error('Not implemented'); }
}