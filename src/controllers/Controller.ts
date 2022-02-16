import { MyObject } from '../types/type';
import { valid } from '../index';

export class Controller {
  resulrValid: MyObject | undefined;

  isValidData(e: any){
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

