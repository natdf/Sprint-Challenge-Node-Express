const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_ERROR = 422;

const { compareBTC } = require('../models/');

router.get('/compare', (req, res) => {
  compareBTC()
    .then(results => {
      res.status(STATUS_SUCCESS);
      res.send({ Results: results });
    })
    .catch(err => {
      res.status(STATUS_ERROR);
      res.send({ err: err });
    });
});

module.exports = router;
