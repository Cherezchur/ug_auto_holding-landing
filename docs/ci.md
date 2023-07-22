## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# gitlab-ci

Файл ```.gitlab-ci.yml.template``` переименовываем  в ```.gitlab-ci.yml```
Затем идем на [http://git.rusrobots.ru](http://git.rusrobots.ru)  в нужный репозиторий.
Переходим в ```Настройки -> CI/CD```


В разделе ```Variables``` добавляем переменные:


```SSHHOST``` – Адрес хоста

```SSHLOGIN``` – Лоигн для подключения к хосту

```SSHPASS``` – Пароль для подключения к хосту

```TELEGRAM_USER_ID```  – ID  телеграм пользователя (для уведомлений).