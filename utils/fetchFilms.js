require("dotenv").config();

const apiKey = process.env.API_KEY;

// Fetch
// https://www.omdbapi.com/?t=<Movie Title>&apikey=<API_KEY>

async function fetchFilm(title) {
    let res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    let film = await res.json();
    if (film.Response == 'False') {
        return null;
    }
    return film;
}

// GET
const getByTitle = async function(req, res) {
  try {
    let film = await fetchFilm(req.params.title)
    if (film === null) {
        res.status(404).json({message: 'Film not found'});
    } else {
        res.status(200).json(film);
    }
  } catch (error) {
    res.status(404).json({error: `ERROR: ${error.stack}`, message: `${req.params.title} couldn't be found.`});
  };
};

// POST
const postFilm = function(req, res) {
    try {
        res.status(200).json({
            success: true,
            message: `Se ha guardado ${req.body.title}`,
            title: req.body.title,
            id: Math.floor(Math.random() * (10000 - 1) + 1),
            data: req.body
        });
    } catch (error) {
        res.status(500).json({error: `ERROR: ${error.stack}`, message: `Your POST couldn't be saved.`});
    };
};

// PUT
const putFilm = function(req, res) {
    try {
        res.status(200).json({
            id: 0,
            message: `Se ha actualizado ${req.body.title}` 
        });
    } catch (error) {
        res.status(500).json({error: `ERROR: ${error.stack}`, message: `${req.params.title} couldn't be edited.`});
    };
};

// DELETE
const deleteFilm = function(req, res) {
    try {
        res.status(200).json({
            id: 123,
            message: `Se ha borrado la película con ID: 123`
        });
    } catch (error) {
        res.status(500).json({error: `ERROR: ${error.stack}`, message: `Movie with ID: 123 couldn't be deleted.`});
    }
}

module.exports = {fetchFilm, getByTitle, postFilm, putFilm, deleteFilm};
