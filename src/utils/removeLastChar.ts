export const removeLastChar = (str:string, char:string) => {
  const last = str.length - 1;
  let newStr: string = '';

  if (str[last] === char) {
    newStr = str.slice(0, last);
  }

  return newStr;
};
