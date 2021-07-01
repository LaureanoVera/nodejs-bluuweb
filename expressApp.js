const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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
