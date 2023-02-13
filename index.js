const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// MONGODB import
const connectDB = require("./config/db");

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;

const server = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT : http://localhost:${PORT}`);
  });
  connectDB();
};
server();
