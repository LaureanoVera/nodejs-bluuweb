const express = require("express");
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

// data bases
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.yxxys.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Base de datos Conectada'))
  .catch(e => console.log(e))

// engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// static
app.use(express.static(__dirname + "/public"));

// routes
app.use("/", require("./router/RutasWeb"));
app.use("/mascotas", require("./router/Mascotas"));

// 404 error
app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "404",
    description: "Pagina sin fondo",
  });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
