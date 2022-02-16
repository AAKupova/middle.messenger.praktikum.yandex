export const queryStringify = (data: any) => {
  return `?${Object.keys(data).map(key => `${key}=${data[key]}`).join('&')}`;
};