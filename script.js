// Подключаем встроенный модуль 'http' для создания сервера
const http = require("http");

// Инициализируем счетчики просмотров для двух страниц
let homeViewCount = 0;
let aboutViewCount = 0;

// Создаем HTTP сервер
const server = http.createServer((req, res) => {
  // Получаем URL запрошенного ресурса
  const url = req.url;

  // Обрабатываем запросы в зависимости от URL
  if (url === "/") {
    // Увеличиваем счетчик просмотров для домашней страницы
    homeViewCount++;

    // Устанавливаем заголовок ответа как HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Формируем HTML контент для домашней страницы
    res.write(`
      <html>
        <head><title>Home</title></head>
        <body>
          <h1>Home Page</h1>
          <p>Home page view count: ${homeViewCount}</p>
          <a href="/about">Go to About Page</a>
        </body>
      </html>
    `);
    // Завершаем ответ
    res.end();
  } else if (url === "/about") {
    // Увеличиваем счетчик просмотров для страницы "About"
    aboutViewCount++;

    // Устанавливаем заголовок ответа как HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Формируем HTML контент для страницы "About"
    res.write(`
      <html>
        <head><title>About</title></head>
        <body>
          <h1>About Page</h1>
          <p>About page view count: ${aboutViewCount}</p>
          <a href="/">Go to Home Page</a>
        </body>
      </html>
    `);
    // Завершаем ответ
    res.end();
  } else {
    // Обработка несуществующих маршрутов (404 Not Found)
    res.writeHead(404, { "Content-Type": "text/html" });

    // Формируем HTML контент для страницы 404
    res.write(`
      <html>
        <head><title>404 Not Found</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
          <a href="/">Go to Home Page</a>
        </body>
      </html>
    `);
    // Завершаем ответ
    res.end();
  }
});

// Запускаем сервер на порту 3000 и выводим сообщение в консоль
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
