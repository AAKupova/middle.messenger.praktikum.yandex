export class  Validation {
  result: boolean;
  patterns:{ [key: string]: RegExp };
  resultValid: { [key: string]: boolean };
  button: HTMLElement | null;
  form: HTMLElement | null;
  fields: NodeListOf<Element> | undefined;
  isValid: boolean;
  disabled: boolean;
  
  constructor(form:string, button:string, field:string) {
    this.patterns = {
      'email': /\S+@\S+\.\S+/,
      'login': /[a-z-A-Z-0-9 - _]{3,20}$/,
      'password': /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
      'phone': /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?/,
      'city': /^([А-ЯЁ]{1}[а-яё -]{1,14})|([A-Z]{1}[a-z -]{1,14})$/u,
      'name': /^([А-ЯЁ]{1}[а-яё -]{1,29})|([A-Z]{1}[a-z -]{1,29})$/u,
    };

    this.form = document.querySelector(form);
    this.fields = this.form?.querySelectorAll(field);
    this.button = document.querySelector(button);
    this.resultValid = {};
    this.isValid;
    this.result;
    this.disabled = true;

    this.#initValidation();
  }

  #isFieldValid(){
    let arrField;

    if(this.fields){
      arrField = Array.from(this.fields);
    }

    return arrField?.some((field:HTMLInputElement) => !field.validity.valid);
  }

  #initValidation() {
    if (this.#isFieldValid()) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }

    if(this.disabled){
      this.#lockButton();
    } else {
      this.#unlockButton();
    }
  }

  isFieldValid(e: { target: HTMLInputElement }){
    const element = e.target;
    const patter = element.getAttribute('data-patter');
    const error = document.querySelector(`.${element.name}-error`);

    if(patter){
      this.result = this.patterns[patter].test(element.value);
      this.resultValid[patter] = this.result;
    }

    this.#isError(element, error as HTMLElement);
  }

  isErrorStatusField(e: { target: HTMLInputElement }){
    const element = e.target;
    const error = document.querySelector(`.${element.name}-error`);

    if(!this.result){
      this.#hideError(element, error as HTMLElement);
    }
  }

  #isError(element: HTMLElement, error: HTMLElement | null){
    if(!this.result){
      this.#showError(element, error);
      this.#toggleButtonDisable();
    }else{
      this.#hideError(element, error);
      this.#toggleButtonDisable();
    }
  }

  #showError(element:HTMLElement, error:HTMLElement | null) {
    if(error){
      error.style.display = 'block';
    }
    element.classList.add('field_error');
  } 

  #hideError(element:HTMLElement, error:HTMLElement | null){
    if(error){
      error.style.display = 'none';
    }
    element.classList.remove('field_error');
  }

  #lockButton() {
    this.button?.setAttribute('disabled', 'disabled');
  }

  #unlockButton() {
    this.button?.removeAttribute('disabled');
  }


  #isValid() {
    const arrValid = Object.values(this.resultValid);
    this.isValid = arrValid.some((result) => result === false);
    
    if(!(arrValid.length === this.fields?.length)){
      if (this.isValid) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    }
  }
  #toggleButtonDisable() {
    this.#isValid();

    if(this.disabled){
      this.#lockButton();
    } else {
      this.#unlockButton();
    }
  }

  submit(e: { target: HTMLFormElement }){
    const form = new FormData(e.target);

    if(this.isValid){
      this.#lockButton();
      console.log('Данные некорректные');
    }else{
      // form.forEach((value, key) => {
      //   console.log(`${key}: ${value}`);
      // });

      return form;
    }
  }
}