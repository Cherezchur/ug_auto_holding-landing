## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Стили

Для написания стилей используется препроцессор SASS. Главный файл находится в папке ```src/``` называется ```index.scss```

Все вспомогательные файлы стилей, стили компонентов, миксины, переменные и т.д. подключаются в этом файле.

Пользовательские глобальные стили описываются в файле ```src/assets/scss/utils/common.scss```.

Статические файлы scss находятся в дериктории ```src/assets/scss/utils/```
Главный файл подключение всех статических стилей находится в дериктории ```src/assets/scss/``` называние ```main.scss```

**_reset.scss – сброс стилей.

**vars.scss – переменные.

**fonts.scss – подключение шрифтов.

**grid.scss – переменные и миксины для работы с сеткой.

**mixins.scss – функции для общего использования во всех стилях.

**libs.scss – подключение стилей из библиотек.

Если вы не знакомы с препроцессором SASS – настоятельно рекомендую вам изучить основы работы с данным инструментов. ([https://sass-scss.ru/](https://sass-scss.ru/))
