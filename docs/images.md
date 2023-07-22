## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Иконки, спрайты, изображения


Иконки в формате SVG  складываем в папку ```src/icons```. Из этих иконок сборщик генерирует спрайт.

Пример использования:
Например, мы положили в папку ```src/icons```  файл ```vk.svg```

```
    //Подключаем компонент иконки
    
    include ../components/icon/icon
    
    +icon(name="vk")
```

Аналогичным образом происходит работа со спрайтами PNG.
В папку ```src/sprite``` складываем иконки в формате  PNG.

Пример использования:
Например мы положили в папку ```src/sprite``` файл ```error.png```

```
    //Подключаем компонент спрайта
    
    include ../components/sprite/sprite
    
    +sprite(name="error")
```


Все остальные изображения сказываются в папку ```src/public/assets/images```.

Пример использования:
Например мы положили в папку ```src/public/assets/images```  файл ```preview.jpg```

```
    +b('image')(alt="Preview" src="assets/images/content/preview.png")
```