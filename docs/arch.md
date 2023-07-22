## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Архитекрура

Проект состоит из следующих файлов/папок:

├─ **dist**  – готовая сборка

├─ **config** – конфиги сбощика

├─ **src** - исходники

│   ├─ **static** - Публичная папка

│   │   ├─ favicons - фавиконки

│   │   ├─ sitemap - изображения

│   ├─ **assets** - компоненты

│   │   ├─ **fonts**  - шрифты

│   │   ├─ **img**  - картинки

│   │   ├─ **scss**  - файлы статических стилей

│   ├─ **components** - компоненты

│   │    ├─ **button**

│   │    │   ├─ button.pug

│   │    │   ├─ button.scss

│   ├─ **sections** - блоки обёртки, секции

│   │    ├─ **menu**

│   │    │   ├─ menu.pug

│   │    │   ├─ menu.scss

│   │    │   ├─ menu.json

│   │    │   ├─ menu.js

│   ├─ **layouts** - схемы страницы

│   │   ├─ default.pug - схема по умолчанию

│   ├─ **pages** - страницы

│   │   ├─ index.pug - Главная страница

├─ tools - Вспомогательные инструменты для сборщика

├─ .gitlab-ci.yml.template  - конфиг gitlab-ci

├─ ci-notify.sh  - скрипт  уведомлений gitlab-ci

├─ backend.js - заглушка для бекэнда
