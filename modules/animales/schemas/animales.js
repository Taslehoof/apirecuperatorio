"use strict";
exports.__esModule = true;
exports.animales = exports.AnimalSchema = void 0;
var mongoose = require("mongoose");
exports.AnimalSchema = new mongoose.Schema({
    tipoAnimal: { type: String, required: false, lowercase: true },
    peso: { type: String, lowercase: true },
    tamanio: { type: String, lowercase: true },
    sexo: { type: String, lowercase: true }
});
exports.animales = mongoose.model("Animal", exports.AnimalSchema, "animales");
