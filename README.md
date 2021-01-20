# MySQL_CRUD_basic

Приклад базового функціоналу CRUD у СКБД MySQL.

    Front:      Відсутній. Перевірку функціональності виконувати у POSTMAN (або аналогах).
    Back:       Node.js + Express.js
    Database:   MySQL + Sequelize
__________________________________________________________________

1.  Запустити сервер MySQL.

2.  Перейменувати файл '.env.example' та визначити параметри оточення.

3.  У терминалі редактора коду або командній строці (завчасно перейшовши у каталог з проектом) прописати:
   
        3.1. npm install - встановлення модулів, необхідних для функціонування програми;
        3.2. npm start   - запуск коду.

4.  Endpoints для POSTMAN:

        http://localhost:5000/api/product/
        
        GET     - отримання списку продуктів.
        POST    - додавання у список нових продуктів.
        
        http://localhost:5000/api/product/:id

        PUT     - редагування продукту за його ID.
        DELETE  - видалення продукту за його ID.