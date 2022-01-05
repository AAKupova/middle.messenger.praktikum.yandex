export interface AuthData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
}

export interface Headers {
  [key:string]: string;
}

export interface Options {
  data?: AuthData,
  timeout?: number,
  headers?: Headers,
  method?: string;
}