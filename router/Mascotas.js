const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", { 
    title: 'Mascotas',
    arrayMascotas: [
      { id: "afwa52h", name: "rex", description: "rex descripcion" },
      { id: "6w26ya8", name: "dum", description: "dum descripcion" },
    ],
  });
});

module.exports = router;
