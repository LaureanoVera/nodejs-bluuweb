const express = require("express");
const router = express.Router();

const Mascota = require("../models/mascota");

router.get("/", async (req, res) => {
  try {
    const arrayMascotasDB = await Mascota.find();
    console.log(arrayMascotasDB);

    res.render("mascotas", {
      title: "Mascotas",
      arrayMascotas: arrayMascotasDB
      // arrayMascotas: [
      //   { id: "afwa52h", name: "rex", description: "rex descripcion" },
      //   { id: "6w26ya8", name: "dum", description: "dum descripcion" },
      // ],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
