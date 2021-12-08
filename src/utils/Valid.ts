export class  Valid {
  result: boolean;
  patterns: object;
  resultValid: object;
  button: HTMLElement | null;
  form: HTMLElement | null;
  fields: NodeListOf<Element> | undefined;
  isNotValid: boolean;
  
  constructor(form:string, button:string, field:string) {
    this.patterns = {
      email: /\S+@\S+\.\S+/,
      login: /[a-z-A-Z-0-9 - _]{3,20}$/,
      password: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
      second_password: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
      second_name: /^([А-ЯЁ]{1}[а-яё -]{1,29})|([A-Z]{1}[a-z -]{1,29})$/u,
      first_name: /^([А-ЯЁ]{1}[а-яё -]{1,29})|([A-Z]{1}[a-z -]{1,29})$/u,
      phone: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?/,
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
    const name = element.name;
    const error = document.querySelector(`.${name}-error`);
    
    if(this.patterns[name] && element.validity.valid){
      this.result = this.patterns[name].test(element.value);
      this.resultValid[name] = this.result;
    }else{
      this.result = this.patterns[name].test(element.value);
      this.resultValid[name] = this.result;
    }

    this.#isError(element, error);
  }

  isErrorStatusField(e){
    const element = e.target;
    const error = document.querySelector(`.${element.name}-error`);

    if(!this.result){
      this.#hideError(element, error);
    }
  }

  #isError(element: HTMLElement, error){
    if(!this.result){
      this.#showError(element, error);
      this.#toggleButtonDisable();
    }else{
      this.#hideError(element, error);
      this.#toggleButtonDisable();
    }
  }

  #showError(element:HTMLElement, error) {
    error.style.display = 'block';
    element.classList.add('field_error');
  } 

  #hideError(element:HTMLElement, error){
    error.style.display = 'none';
    element.classList.remove('field_error');
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