import './index.scss';

export const DEV_TYPE = process.env.NODE_ENV;

import { ModalForm } from './sections/modal-form/modal-form';

const modalForm = document.querySelector('[data-init="modalForm"]');
new ModalForm(modalForm).init();

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

