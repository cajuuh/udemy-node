const express = require("express");

const app = express();

app.use("/add-product", (request, response, next) => {
  response.send("<h1>Add Product Page</h1>");
});

app.use("/", (request, response, next) => {
  response.send("<h1>Hello from express</h1>");
});

app.listen(3000);
