const router = require("express").Router();
const {getByTitle, postFilm, putFilm, deleteFilm} = require('../utils/fetchFilms');

router.get("/:title?", getByTitle);

router.post('/', postFilm);

router.put('/', putFilm);

router.delete('/', deleteFilm);

module.exports = router;