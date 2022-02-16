export interface UserData {
  display_name?: string,
  second_name?: string,
  first_name?: string,
  password?: string,
  avatar?: string,
  login?: string,
  email?: string,
  phone?: string,
  id?: number,
}

export interface StateData {
  user: {
    display_name?: string,
    second_name?: string,
    first_name?: string,
    password?: string,
    avatar?: string,
    login?: string,
    email?: string,
    phone?: string,
    id?: number,
  }
}

export interface MyObject {
  [key: string]: any;
}

export interface Headers {
  [key:string]: string;
}

export interface Options {
  formData?: FormData;
  headers?: Headers,
  timeout?: number,
  method?: string,
  data?: UserData,
}