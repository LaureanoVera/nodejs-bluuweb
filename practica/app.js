const express = require("express");
const app = express();
const port = 4008;

app.get("/", (req, res) => {
  res.end("Home");
});

app.get("/services", (req, res) => {
  res.end("Services");
});

app.get('/team', (req, res) => {
  res.end('Team')
})

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
