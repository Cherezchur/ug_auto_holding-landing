## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Данные

Контентные данные можно выносить в отдельный yml  файл.

Например, у нас есть компонент main-menu. Создадим в папке компонента файл ```main-menu.yml``` (yml-файл именуем так же как и компонент).
```yaml
//main-menu.yml

---

mainMenu:

	default:

		-

			title:  Главная

			url:  main

		-

			title:  О  проекте

			url:  about

		-

			title:  Документы

			url:  documents

		-

			title:  Техподдержка

			url:  support

		-

			title:  Контакты

			url:  contacts
```

Теперь мы можем использовать этот контент в верстке

```
//main-menu.pug

mixin main-menu(data)

	+b('main-menu',  {t:  'nav'})&attributes(attributes)

		+e('list',  {t:  'ul'})

			each  item  in  data

				+e('item')

					+e('link',  {t:  'a'})(href=`${item**.**url}.html`)= item.title
```

Вызывая миксин main-menu  в качестве параметров передаем ему переменную mainMenu созданную в yml  файле.

```
//Например, вызовем наш миксин в каком-нибудь header.pug

include ../main-menu/main-menu

+main-menu(mainMenu.default)
```
