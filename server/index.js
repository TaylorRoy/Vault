const express = require('express');
const bodyParser = require('body-parser');
const app = module.exports = express();
const mongoose = require("mongoose");
const session = require("express-session");

app.use(bodyParser.json());

// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

app.use(session({
	secret: "skippy boo bop",
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: (1000*60*60*24*14) }
}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vault", { useNewUrlParser: true})
.then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database' +err)
});

app.use(express.static(__dirname + './../build'))

const authController = require("./authController.js");
// app.post("/api/login", authController.login);
app.post("/api/login", authController.create);
app.post("/api/verify/login", authController.login)


const dataController = require("./dataController.js")
app.post("/api/newpassword", dataController.create)
// app.get("/api/loadpasswords", dataController.findAll)
app.get("/api/loadpasswords/:id", dataController.findAll)
app.delete("/api/deletepassword/:id", dataController.remove)

app.listen(3001, console.log("you are now connected on " + 3001));
