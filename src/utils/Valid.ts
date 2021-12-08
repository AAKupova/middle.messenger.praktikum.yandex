export class  Valid {
  result: boolean;
  patterns: object;
  errorMSG: object;
  resultValid: object;
  button: HTMLElement | null;
  form: HTMLElement | null;
  fields: NodeListOf<Element> | undefined;
  isNotValid: boolean;
  
  constructor(form:string, button:string, field:string) {
    this.patterns = {
      email: /\S+@\S+\.\S+/,
      password: /[A-Z]/g,
    };

    this.errorMSG = {
      email: 'Пожалуйста введите Ваш e-mail',
      password: 'Пароль должен быть не меньше 8 символов и содержать одну заглавную букву',
    };

    this.form = document.querySelector(form);
    this.fields = this.form?.querySelectorAll(field);
    this.button = document.querySelector(button);
    this.resultValid = {};
    this.isNotValid;
    this.result;
  }

  isFieldValid(e){
    const element = e.target;
    const type = element.type;
    const error = document.querySelector(`.${type}-error`);

    if(this.patterns[type] && element.validity.valid){
      this.result = this.patterns[type].test(element.value);
      this.resultValid[type] = this.result;
    }else{
      this.result = this.patterns[type].test(element.value);
      this.resultValid[type] = this.result;
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

  #isError(element: HTMLElement, error, type:string){
    if(!this.result){
      this.#showError(element, error, type);
      this.#toggleButtonDisable();
    }else{
      this.#hideError(element, error);
      this.#toggleButtonDisable();
    }
  }

  #showError(element:HTMLElement, error, type:string) {
    error.textContent = this.errorMSG[type];
    element.classList.add('error');
  } 

  #hideError(element:HTMLElement, error){
    error.textContent = '';
    element.classList.remove('error');
  }

  #lockButton() {
    this.button?.setAttribute('disabled', 'disabled');
  }

  #unlockButton() {
    this.button?.removeAttribute('disabled');
  }

  #toggleButtonDisable() {
    const arrValid = Object.values(this.resultValid);
    this.isNotValid = arrValid.some((result) => result === false);
    
    if(arrValid.length === this.fields?.length){
      if (this.isNotValid) {
        this.#lockButton();
      } else {
        this.#unlockButton();
      }
    }
  }



  submit(e){
    const form = new FormData(e.target);

    if(this.isNotValid){
      console.log('Данные некорректные');
      this.#lockButton();
    }else{
      form.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    }
  }
}