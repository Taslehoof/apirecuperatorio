import * as express from "express";
import * as animalesSchema from "./../schemas/animales";

const router = express.Router();

router.post("/animales", async (req, res) => {
  try {
    const newAnimal = req.body;
    const animales = new animalesSchema.animales(newAnimal);
    const animalNuevo = await animales.save();
    console.log("Animal agregado", animalNuevo);
    return res.status(200).send({ status: "success", data: animalNuevo });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

router.get("/animales", async (req, res) => {
  try {
    let animales = await animalesSchema.animales.find();
    console.log("Animales registradas!", animales);
    return res.status(200).send({ status: "success", data: animales });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

router.put("/animal/:id", async (req, res) => {
  try {
    const animalUpdate = req.body;
    const idAnimal = req.params.id;
    const animaltUpdated = await animalesSchema.animales.findByIdAndUpdate(
      idAnimal,
      animalUpdate,
      { new: true }
    );
    console.log("Animal modificado", animaltUpdated);
    return res.status(200).send({ status: "success", data: animaltUpdated });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

router.delete("/animal/:id", async (req, res) => {
  try {
    const animalDelete = req.body;
    const idAnimal = req.params.id;
    const animalDeleted = await animalesSchema.animales.findByIdAndDelete(
      idAnimal,
      animalDelete
    );
    console.log("Animal Borrado", animalDelete);
    return res.status(200).send({ status: "success", data: animalDelete });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

export = router;
