const express = require("express");
const app = express();
const port = 4008;

// ===== ENGINE =====
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ===== STATIC =====
app.use(express.static(__dirname + "/public"));

// ===== ROUTES =====
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/team", (req, res) => {
  res.render('team', {team: ['Lauri', 'Ivan', 'Gerardo']})
});

// ===== 404ERR =====
app.use((req, res, next) => {
  res.status(404).render('404', {
    title: '404',
    err: '404 err'
  })
});

// ===== LISTEN =====
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
