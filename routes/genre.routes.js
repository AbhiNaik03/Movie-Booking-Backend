const express = require('express');
const findAllGenres = require('../controllers/genre.controller')

const router = express.Router();

router.get('/api/genres', findAllGenres);

module.exports = router;