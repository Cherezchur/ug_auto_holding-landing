export class ModalForm {
  constructor(el) {
    this.el = el;
    this.modalClose = '.modal-form__close';
  }

  loadState() {
    this.modalClose = this.el.querySelector(this.modalClose);
  }

  loadEvents() {
    if(this.modalClose) {
      this.modalClose.style.color = 'red';
    }
  }


  init() {
    if (this.el) {
      this.loadState();
      this.loadEvents();
    }
  }
}
