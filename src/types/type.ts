export interface UserData {
  first_name?: string,
  second_name?: string,
  login?: string,
  email: string,
  password: string,
  phone?: string,
  id?: number,
  display_name?: string,
  avatar?: string,
}

export interface Headers {
  [key:string]: string;
}

export interface Options {
  data?: UserData,
  timeout?: number,
  headers?: Headers,
  method?: string;
}