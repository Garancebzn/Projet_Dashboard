const Titre = require('../models/titre.model.js');

// Create and Save a new Titre
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'name can not be empty'
    });
  }

  // Create a new Titre
  const titre = new Titre({
    name: req.body.name,
    nbr_ecoute: req.body.nbr_ecoute || '',
    like: req.body.like,
  });

  // Save Titre in the database
  titre
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly titre integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new titre in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Titre.'
      });
    });
};

// Retrieve and return all titres from the database.
exports.findAll = (req, res) => {
  Titre.find()
    .then(titre => {
      res.send(titre);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving titres.'
      });
    });
};

// Find a single Titre with a titreId
exports.findOne = (req, res) => {
  Titre.findById(req.params.titreId)
    .then(titre => {
      if (!titre) {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      res.send(titre);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving titre with id ' + req.params.titreId
      });
    });
};

// Update a titre identified by the titreId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find titre and update it with the request body
  Titre.findByIdAndUpdate(
    req.params.titreId,
    {
      title: req.body.firstName,
      content: req.body.lastName || ''
    },
    { new: true }
  )
    .then(titre => {
      if (!titre) {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      res.send(titre);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      return res.status(500).send({
        message: 'Error updating titre with id ' + req.params.titreId
      });
    });
};

// Delete a titre with the specified titreId in the request
exports.delete = (req, res) => {
  Titre.findByIdAndRemove(req.params.titreId)
    .then(titre => {
      if (!titre) {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      res.send({ message: 'titre deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'titre not found with id ' + req.params.titreId
        });
      }
      return res.status(500).send({
        message: 'Could not delete titre with id ' + req.params.titreId
      });
    }); 
};