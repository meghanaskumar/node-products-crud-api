const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//router
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://meghanakumar:LCBc6XVzLbMjHbHt@backendproductdb.rrcy5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendProductDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
