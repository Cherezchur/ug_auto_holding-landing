import './index.scss';

export const DEV_TYPE = process.env.NODE_ENV;

import { Modal } from './assets/js/modal';
import { Form } from './assets/js/form';

const modals = document.querySelectorAll('[data-init="modal"]');
const forms = document.querySelectorAll('[data-init-form]');

if(modals.length) {
  modals.forEach(modal => new Modal(modal).init());
}

if(forms.length) {
  forms.forEach(form => new Form(form).init());
}

// Якорные ссылки

const anchors = document.querySelectorAll('[data-init="scrollTo"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


// Инициализируем секции

