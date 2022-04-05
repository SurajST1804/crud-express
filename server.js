const express = require("express");
const morgan = require("morgan");
const { dbConnection } = require("./config/db");
const { PORT, NODE_ENV } = require("./config/index");
const cors = require("cors");
const app = express();
const StudentRoute = require("./routes/student");

// databse connection----
dbConnection();
// databse connection----

// !----middle ware section starts here--------
if (NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// app.use.cors();
app.use(cors());
// !-----middle ware section ends here------

// ?----load routes start here----------
app.use("/api/students/", StudentRoute);
// ?----load routes ends here--------

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server running on port 5000");
});
