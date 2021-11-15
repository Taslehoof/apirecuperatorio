import * as mongoose from "mongoose";

export const AnimalSchema = new mongoose.Schema({
    tipoAnimal: { type: String, required: false, lowercase: true },
    peso: { type: String, lowercase: true },
    tamanio: { type: String, lowercase: true },
    sexo: { type: String, lowercase: true }
});

export let animales = mongoose.model("Animal", AnimalSchema, "animales");