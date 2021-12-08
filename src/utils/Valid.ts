export class  Valid {
  result: boolean;
  patterns: object;
  errorMSG: object;
  form: HTMLElement | null;
  field: HTMLElement | null;
  button: HTMLElement | null;
  
  constructor(form:string, field:string, button:string) {
    this.form = document.querySelector(form);
    this.field = document.querySelector(field);
    this.button = document.querySelector(button);
    this.result;
    this.patterns = {
      email: /\S+@\S+\.\S+/,
      password: /[A-Z]/g,
    };

    this.errorMSG = {
      email: 'Пожалуйста введите Ваш e-mail',
      password: 'Пароль должен быть не меньше 8 символов и содержать одну заглавную букву',
    };
  }

  isFieldValid(e){
    const element = e.target;
    const isValid = element.validity.valid;
    const type = element.type;
    const error = document.querySelector(`.${type}-error`);

    if(this.patterns[type] && isValid){
      this.result = this.patterns[type].test(element.value);
    }else{
      this.result = this.patterns[type].test(element.value);
    }

    this.#isError(element, error, type);
  }

  isErrorStatusField(e){
    const element = e.target;
    const error = document.querySelector(`.${element.type}-error`);

    if(!this.result){
      this.#hideError(element, error);
    }
  }

  #isError(element: HTMLElement, error, type){
    !this.result? this.#showError(element, error, type)
    :this.#hideError(element, error);
  }

  #showError(element, error, type) {
    error.textContent = this.errorMSG[type];
    element.classList.add('error');
  } 

  #hideError(element:HTMLElement, error){
    error.textContent = '';
    element.classList.remove('error');
  }
}