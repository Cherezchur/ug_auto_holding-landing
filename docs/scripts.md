## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Скрипты
Для написания скриптов можно использовать ES6. Главным файлом (точкой входа) является ```src/index.js```.

Скрпиты для компонентов размещать в папке компонента и описывать только логику компонента.

Пример создания компонента:

```javascript
//Импортируем нужные инструменты

export class Header {
  constructor(el) {
    this.el = el;
    // тут будут находится имена искомых элементов в данном компоненте
  }

  loadState() {
    // тут загрузка состояние искомых элементов
  }

  loadEvents() {
    // тут загрузка навешивания событий на элементы
  }


  init() {
    if (this.el) {
      this.loadState();
      this.loadEvents();
    }
  }
}
```
Затем в index.js  подключаем наш плагин

```javascript
//Импортируем компонент

import Header from  "../components/header/header.js";


//Вызываем  плагин
const header = document.querySelector('[data-init="header"]');

if (header) {
  new Header(header).init();
}
```
