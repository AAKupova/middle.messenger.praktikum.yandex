export const removeLastChar = (str, char) => {
  const last = str.length - 1;

  if (str[last] === char) {
    str = str.slice(0, last);
  }

  return str;
};
