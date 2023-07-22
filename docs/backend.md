## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Backend
Заглушка запускается командой ```npm  run  backend```

В файле ```backend.js```  добавляете нужные роуты и их ответы. После чего запускаете заглушку.

Запросы посылаем на http://localhost:3005/имя_роута

Например в файл backend.js добавим роут /api/user

```javascript
...


// Use Routes

app.get("/api/", (req, res)  => {
	res.status(200).json({
		error: false,
		msg:  "На указанный Вами адрес электронной почты было отправлено письмо с простыми инструкциями для завершения регистрации."
	});
});

app.get("/api/user", (req, res)  => {
	res.status(200).json({
		firstname:  "Сергей",
		lastname: "Иванов"
	});
});

```

Запустим заглушку. Теперь при обращении по адресу http://localhost:3005/api/user нам будет возвращаться json-объект 
```json
{
	firstname:  "Сергей",
	lastname: "Иванов"
}
```