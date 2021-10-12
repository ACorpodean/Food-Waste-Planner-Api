var express = require("express");
var router = express.Router();
var fs = require("fs");
var mysql = require("mysql");

const DATA_PATH = "data/structure.sql";

/**
 * IMPORTANT: add content type headers to be able to use req.body.*
  headers: {"Content-Type": "application/json"},
 */

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_planner"
});

/**
 * run this before first USAGE to create products TABLE
 */
router.get("/install", function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = fs.readFileSync(DATA_PATH, "utf8");
    connection.query(sql, function (err, results) {
      if (err) {
        console.error("Install failed", err);
      }
      connection.release();
      res.redirect("/");
    });
  });
});

/**
 *
 */
router.get("/", function (req, res, next) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `SELECT 
        id, 
        name,
        DATE_FORMAT(expiration, "%Y-%m-%d") as expiration,
        expiration < now() as expired,
        weight,
        price 
      FROM products`;
    connection.query(sql, function (err, results) {
      if (err) {
        console.error(err);
        connection.release();
        res.send(err);
        return;
      }
      connection.release();
      res.json(results);
    });
  });
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const name = req.body.name;
  const expiration = req.body.expiration;
  const weight = req.body.weight;
  const price = req.body.price;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `INSERT INTO products (id, name, expiration, weight, price) VALUES (NULL, ?, ?, ?, ?);`;
    connection.query(sql, [name, expiration, weight, price], function (err, results) {
      if (err) throw err;
      const id = results.insertId;
      connection.release();
      res.json({
        success: true,
        id
      });
    });
  });
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `DELETE FROM products WHERE id=?`;
    connection.query(sql, [id], function (err, results) {
      if (err) throw err;
      connection.release();
      res.json({ success: true });
    });
  });
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

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    const sql = `UPDATE products SET name=?, expiration=?, weight=?, price=? WHERE id=?`;
    connection.query(sql, [name, expiration, weight, price, id], function (err, results) {
      if (err) throw err;
      connection.release();
      res.json({ success: true });
    });
  });
});

module.exports = router;
