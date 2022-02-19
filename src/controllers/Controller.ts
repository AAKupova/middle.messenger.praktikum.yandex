import { MyObject } from '../types/type';

export class Controller {
  resulrValid: any;

  isValidData(e: any, valid: any){
    console.log(valid.submit(e as any));
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

