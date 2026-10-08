const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Product Service is running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1200
    },
    {
      id: 2,
      name: "Headphones",
      price: 150
    },
    {
      id: 3,
      name: "Keyboard",
      price: 80
    }
  ];

  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});