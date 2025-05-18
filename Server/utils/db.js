import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeems"
});

con.connect(function(err) {
  if (err) {
    console.error("Connection error:", err.message);
  } else {
    console.log("Connected to MySQL database.");
  }
});

export default con;

