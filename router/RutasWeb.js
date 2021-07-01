const express = require("express");
const router = express.Router();

// get
router.get("/", (req, res) => {
  res.render("index", { title: "Titulo Dinamico" });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", { title: "Web de Servicios" });
});

module.exports = router;