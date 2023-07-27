import Axios from 'axios';

export class Form {
  constructor(el) {
    this.el = el;

    this.inputField = '[data-init="input-field"]';
    this.submit = '[data-init="submit"]';
    this.form = 'form';
    this.successful = '.success-modal';
    // this.callbackMessage = '[data-init="callbackMessage"]';
    this.sendingMessage = 'Отправляем ... ';
  }

  loadState() {
    this.inputFields = this.el.querySelectorAll(this.inputField);
    this.submit = this.el.querySelector(this.submit);
    this.form = this.el.querySelector(this.form);
    // this.callbackMessage = this.el.querySelector(this.callbackMessage);
    this.successful = document.querySelector(this.successful);
    this.submitTitle = this.submit.textContent;
    this.checkValidity = true;
  }
  loadEvents() {

    if(this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submit.textContent = this.sendingMessage;
        this.sendForm();
      });
    }
  }

  sendForm() {
    this.checkingValidity();

    if(this.checkValidity) {
      const formAction = this.form.action;
      let data = new FormData(this.form);

      Axios.post(formAction, data).then(() => {
        this.submit.textContent = this.submitTitle;
        if(this.form.name === 'modal-form') {
          const modal = document.querySelector('.modal-form');
          modal.classList.remove('show');
        };
        this.successful.classList.add('show');
        this.form.reset();
        this.inputFields.forEach(input => {
          input.classList.remove('active');
        });
      });

    } else {
      this.submit.textContent = this.submitTitle;
    }
  }

  checkingValidity() {
    this.inputFields.forEach(input => {
      this.checkInput(input);

      input.addEventListener('input', () => {
        this.checkInput(input);
      });

    });
  }

  checkInput(input) {
    const inputWrapper = input.closest('.callback-form__field');
    const callbackMessage = inputWrapper.querySelector('.callback-form__callback');

    if(input.value === '') {
      input.classList.add('error');
      callbackMessage.classList.add('show');
      callbackMessage.textContent = 'Поле обязательно для заполнения';
      this.checkValidity = false;
      return;
    }

    if(input.type === 'text') {
      if(input.value.length < 3) {
        input.classList.add('error');
        callbackMessage.classList.add('show');
        callbackMessage.textContent = 'Слишком короткое имя (минимум 3 исмвола)';
        this.checkValidity  = false;
        return;
      } else if(input.value.length > 60) {
        input.classList.add('error');
        callbackMessage.classList.add('show');
        callbackMessage.textContent = 'Имя слишком длинное (максимум 60 символов)';
        this.checkValidity = false;
        return;
      }
    }

    if(input.type === 'tel') {
      if(input.value.length < 11 || input.value.length > 18) {
        callbackMessage.classList.add('show');
        callbackMessage.textContent = 'Номер телефона введен неверно';
        this.checkValidity = false;
        return;
      }
    }

    input.classList.remove('error');
    callbackMessage.classList.remove('show');
    callbackMessage.textContent = '';
    this.checkValidity = true;
  }

  init() {
    if (this.el) {
      this.loadState();
      this.loadEvents();
    }
  }

}
