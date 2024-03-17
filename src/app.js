const express = require("express");
//inicializamos express
const app = express();
//puerto
const PUERTO = 8080;
//importamos las rutas
const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");
//traemos el product manager
const ProductManager = require("./controllers/productManager.js");
//instanciamos
const productManager = new ProductManager("./src/models/productos.json");
//configuramos middleware para recibir datos en formato json
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//listen
app.listen(PUERTO, () => {
  console.log(`conectado en http://localhost:${PUERTO}`);
});

module.exports = productManager;
