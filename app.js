const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user_routers");
const AuthRoute = require("./routers/auth_routers");
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",AuthRoute);

module.exports = app;