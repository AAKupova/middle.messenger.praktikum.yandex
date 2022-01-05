export const merge = (objOne: any, objTwo: any): any => {
  for( const prop in objTwo){
    try {
      if(typeof objTwo[prop] === 'object'){
        objOne[prop] = merge(objOne[prop], objTwo[prop]);
      }else{
        objOne[prop] = objTwo[prop];
      }
    } catch(e){
      objOne[prop] = objTwo[prop];
    }
  }
  return objOne;
};
