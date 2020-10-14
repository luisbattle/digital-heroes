var express = require("express");
var router = express.Router();
const fs = require("fs");
const heroesJsonData = require("../data/heroes.json");

router.get("/detalle/:id", function (req, res, next) {
  heroesJsonData.forEach((element) => {
    console.log(element);
    if (element.id == req.params.id) {
      res.render("heroe-detalle", {
        nombre: element.nombre,
        profesion: element.profesion,
      });
    }
  });
  res.send("<h1>No se encontro el heroe solicitado :(</h1>");
});

router.get("/bio/:id/:string?", function (req, res, next) {
  heroesJsonData.forEach((element) => {
    if (element.id == req.params.id) {
      if (req.params.string == "ok") {
        res.render("heroe-bio", {
          heroe: element.nombre,
          bio: element.resenia,
          notOk: "",
        });
        // Si no llega el ok en el path
      } else {
        res.render("heroe-bio", {
          heroe: element.nombre,
          bio: "",
          notOk: "Lamento que no desees saber más de mi :(",
        });
      }
    }
  });
  //not find heroes
  res.send("No encontramos un héroe para mostrarte su biografía");
});

router.get("/", function (req, res, next) {
  res.send(heroesJsonData);
});

module.exports = router;
