export class ModalForm {
  constructor(el) {
    this.el = el;
    this.showButtons = '[data-show-modal]';
    this.modalClose = '.modal-form__close';
  }

  loadState() {
    this.modalClose = this.el.querySelector(this.modalClose);
    this.showButtons = document.querySelectorAll(this.showButtons);
  }

  loadEvents() {
    this.el.addEventListener('click', (e) => {
      if(e.target.dataset.init === 'modalForm') this.closeModal()
    });

    if(this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }

    if(this.showButtons) {
      this.showButtons.forEach(button => {
        button.addEventListener('click', () => this.showModal());
      });
    }
  }

  showModal() {
    document.body.classList.add('modal-show');
    this.el.classList.add('show');
  }

  closeModal() {
    document.body.classList.remove('modal-show');
    this.el.classList.remove('show');
  }

  init() {
    if (this.el) {
      this.loadState();
      this.loadEvents();
    }
  }
}
