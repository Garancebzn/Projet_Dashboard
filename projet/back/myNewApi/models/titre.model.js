const mongoose = require('mongoose');

const titreSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        unique: true,
      },
      nbr_ecoute: String,
      like: String,
  }
);

module.exports = mongoose.model('Titre', titreSchema);