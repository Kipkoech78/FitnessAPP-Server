const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ["breakfast", "lunch", "AfterNoonSnack","dinner"], required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fat: { type: Number, required: true },
  goal: { 
    type: [String], 
    enum: ["weight_loss", "muscle_gain", "maintenance"], required: true }
});

module.exports = mongoose.model("Food", FoodSchema);
