const Album = require('../models/album.model.js');

// Create and Save a new Album
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  // Create a new Album
  const album = new Album({
    name: req.body.name,
    date_sortie: req.body.lastName || '',
    genre: req.body.genre,
    cover_picture_url: req.body.cover_picture_url,
  });

  // Save Album in the database
  album
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly album integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new album in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Album.'
      });
    });
};

// Retrieve and return all albums from the database.
exports.findAll = (req, res) => {
  Album.find()
    .then(album => {
      res.send(album);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving albums.'
      });
    });
};

// Find a single Album with a AlbumId
exports.findOne = (req, res) => {
  Album.findById(req.params.albumId)
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      res.send(album);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving album with id ' + req.params.albumId
      });
    });
};

// Update a album identified by the albumId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find album and update it with the request body
  Album.findByIdAndUpdate(
    req.params.albumId,
    {
      title: req.body.firstName,
      content: req.body.lastName || ''
    },
    { new: true }
  )
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      res.send(album);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      return res.status(500).send({
        message: 'Error updating album with id ' + req.params.albumId
      });
    });
};

// Delete a album with the specified albumId in the request
exports.delete = (req, res) => {
  Album.findByIdAndRemove(req.params.albumId)
    .then(album => {
      if (!album) {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      res.send({ message: 'album deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'album not found with id ' + req.params.albumId
        });
      }
      return res.status(500).send({
        message: 'Could not delete album with id ' + req.params.albumId
      });
    }); 
};