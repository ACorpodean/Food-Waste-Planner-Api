var express = require("express");
var router = express.Router();
var fs = require("fs");

const DATA_PATH = "data/products.json";

/**
 * IMPORTANT: add content type headers to be able to use req.body.*
  headers: {"Content-Type": "application/json"},
 */

/**
 *
 */
router.get("/", function (req, res, next) {
  const content = fs.readFileSync(DATA_PATH);
  const products = JSON.parse(content);
  res.json(products);
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const name = req.body.name;
  const expiration = req.body.expiration;
  const weight = req.body.weight;
  const price = req.body.price;

  let content = fs.readFileSync(DATA_PATH);
  const products = JSON.parse(content);

  const id = Math.random().toString(36).substring(7) + new Date().getTime();

  products.push({
    id,
    name,
    expiration,
    weight,
    price
  });

  content = JSON.stringify(products, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true, id });
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  let content = fs.readFileSync(DATA_PATH);
  const products = JSON.parse(content);

  const remainingProducts = products.filter(function (product) {
    return product.id != id;
  });

  content = JSON.stringify(remainingProducts, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true });
});

/**
 *
 */
router.put("/update", function (req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const expiration = req.body.expiration;
  const weight = req.body.weight;
  const price = req.body.price;

  let content = fs.readFileSync(DATA_PATH);
  const products = JSON.parse(content);

  const match = products.find(function (product) {
    return product.id == id;
  });
  if (match) {
    match.name = name;
    match.expiration = expiration;
    match.weight = weight;
    match.price = price;
  }

  content = JSON.stringify(products, null, 2);
  fs.writeFileSync(DATA_PATH, content);

  res.json({ success: true });
});

module.exports = router;
