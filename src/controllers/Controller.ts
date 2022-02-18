import { MyObject } from '../types/type';
// import { valid } from '../index';

export class Controller {
  resulrValid: any;

  isValidData(e: any, valid: any){
    this.resulrValid = valid.submit(e as any);
  }

  addData() {
    const obj: MyObject = {};

    if (this.resulrValid) {
      this.resulrValid.forEach((value: string, key: string) => {
        obj[key] = value;
      });
    }
    return obj;
  }
}

