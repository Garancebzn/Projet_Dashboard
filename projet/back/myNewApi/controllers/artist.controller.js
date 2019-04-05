const Artist = require('../models/artist.model.js');

// Create and Save a new Artist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name_artist) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  // Create a new Artist
  const artist = new Artist({
    name_artist: req.body.name_artist,
    birth: req.body.birth,
    followers: req.body.followers,
    Album: req.body.Album,
  });

  // Save Artist in the database
  artist
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly artist integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new artist in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Artist.'
      });
    });
};



// Retrieve and return all artists from the database.
exports.findAll = (req, res) => {
  Artist.find()
    .then(artist => {
      res.send(artist);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving artists.'
      });
    });
};

// Find a single Artist with a ArtistId
exports.findOne = (req, res) => {
  Artist.findById(req.params.artistId)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving artist with id ' + req.params.artistId
      });
    });
};

// Update a artist identified by the artistId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find artist and update it with the request body
  Artist.findByIdAndUpdate(
    req.params.artistId,
    {
      title: req.body.firstName,
      content: req.body.lastName || ''
    },
    { new: true }
  )
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      res.send(artist);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Error updating artist with id ' + req.params.artistId
      });
    });
};



// Delete a artist with the specified artistId in the request
exports.delete = (req, res) => {
  Artist.findByIdAndRemove(req.params.artistId)
    .then(artist => {
      if (!artist) {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      res.send({ message: 'artist deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'artist not found with id ' + req.params.artistId
        });
      }
      return res.status(500).send({
        message: 'Could not delete artist with id ' + req.params.artistId
      });
    }); 
    
}; 