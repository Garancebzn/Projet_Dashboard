var express = require('express');
var router = express.Router();
// we import our titre controller
var titre = require('../controllers/titre.controller');

/* GET one titre */
router.get('/:titreId', titre.findOne);

/* DELETE  one titre */
router.delete('/:artistId', titre.delete);
/* update  one titre */
router.post('/:artistId', titre.update);

/* create  one titre */
router.put('/', titre.create);

/* GET artists listing. */
router.get('/', titre.findAll);

module.exports = router;