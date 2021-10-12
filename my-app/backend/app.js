var express = require("express");
var app = express();
var mongoose = require("mongoose");
const productsRoute = require("./routes/products");
const salesRoute = require("./routes/sales");
const usersRoute = require("./routes/users");
const URI =" ";
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productsRoute);
app.use("/api/sales", salesRoute);
app.use("/api/users", usersRoute);
app.use(express.static("./public"));
//Database
mongoose.connect(URI).then((db) => console.log("DB is connected"));
module.exports = app;
