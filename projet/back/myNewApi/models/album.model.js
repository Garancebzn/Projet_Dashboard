const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    name: {
        type: String,
      },
      date_sortie: String,
      genre: String,
      cover_picture_url: String,
  }
);

module.exports = mongoose.model('Album', albumSchema);