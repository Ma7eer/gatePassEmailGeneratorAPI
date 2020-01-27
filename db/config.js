const pg = require("pg");

const conString = process.env.DB_URL;

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    // res.status(500).json({ message: "Could not connect to db" });
    console.log(err);
  }
  console.log("connected to db");
});

module.exports = client;
