const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const dragonSchema = new Schema(
  {

  },
  {
    timestamps: true
  }
);

module.exports = model('Dragon', dragonSchema);