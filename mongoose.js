const mongoose = require("mongoose");

const charSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
  },
  const: {
    type: Number,
  },
  dex: {
    type: Number,
  },
  str: {
    type: Number,
  },
  wis: {
    type: Number,
  },
  charisma: {
    type: Number,
  },
  int: {
    type: Number,
  },
  personality: {
    type: String,
  },
  equipment: {},
});

// charSchema.virtual("traits", {
//   ref: "Trait",
//   localField: "_id",
//   foreignField: "owner",
// });

charSchema.methods.toJSON = function () {
  const char = this;
  const charObject = char.toObject();

  return charObject;
};

const Char = mongoose.model("Char", charSchema);

module.exports = Char;
