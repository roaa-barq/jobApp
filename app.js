const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user_routers");
const AuthRoute = require("./routers/auth_routers");
const externalAPI= require("./routers/external_api")
const app = express();

app.use(bodyParser.json())

app.use("/",UserRoute);
app.use("/",AuthRoute);
app.use("/",externalAPI);
module.exports = app;