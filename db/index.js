const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "search_bar",
});

connection.connect();

const findAllOrder = (req, res) => {
  connection.query("SELECT * FROM orders LIMIT 100;", (err, data) => {
    if (err) {
      res.status(500).end();
    }
    res.status(200).send(data);
  });
};

const findOrderByID = (req, res) => {
  let min = req.query.min;
  let max = req.query.max;

  connection.query(
    `SELECT * FROM orders WHERE order_id BETWEEN ${min} AND ${max} LIMIT 100;`,
    (err, data) => {
      if (err) {
        res.status(500).end();
      }
      res.status(200).send(data);
    }
  );
};

exports.findAllOrder = findAllOrder;
exports.findOrderByID = findOrderByID;
