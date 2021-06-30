const express = require("express");
const app = express();
const port = 4008;

// ===== ENGINE =====
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ===== STATIC =====
app.use(express.static(__dirname + '/public'))

// ===== ROUTES =====
app.get("/", (req, res) => {
  res.render('index')
});

app.get("/services", (req, res) => {
  res.end("Services");
});

app.get("/team", (req, res) => {
  res.end("Team");
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
