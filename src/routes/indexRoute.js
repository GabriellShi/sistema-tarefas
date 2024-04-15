const express = require("express");
const router = express.Router();

// Controlador 
const indexController = require("../controllers/IndexController");

router.get("/", indexController.index);

router.get("/create", indexController.create);
router.post("/create", indexController.store);

router.get("/edit/:id", indexController.edit);
router.post("/edit/:id", indexController.update);

router.get("/delete/:id", indexController.delete);
router.delete("/delete/:id", indexController.destroy);

router.put("/:id/updateEstado", indexController.updateEstado);
router.put("/:id/updateTempoRestante", indexController.updateTempoRestante); // Nova rota para atualizar o tempo restante

router.get("/:id", indexController.show); // Mantenha esta rota por último

module.exports = router;
