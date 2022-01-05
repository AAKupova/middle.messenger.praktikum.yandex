import { merge } from './merge';

export const set = (object: any, path: any, value: any): any => {

  if(typeof path !== 'string'){
    return 'path must be string';
  }
  
  if(typeof object !== 'object'){
    return object;
  }
  
  const arrPath = path.split('.');
  
  if(arrPath.length === 1){
    object[arrPath[0]] = value;
    return object;
  }else{
    const newObj = arrPath.reduceRight((acc: any, val: any): any => {
     
     return {[val]: {[acc]: value}};
  });

  return merge(object,newObj);

  }
};
