const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js")
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");


router.get("/", getProducts);
router.post("/", createProduct);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;