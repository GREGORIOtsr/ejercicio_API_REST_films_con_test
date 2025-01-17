const express = require("express");
const filmsRoutes = require('./routes/films');

const app = express();
app.use(express.json());

const port = 3000;

// Routes
app.use('/api/film', filmsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Hello World" });
})

app.listen(port, () => {
  console.log(`> Listening on http://localhost:${port}`);
});

module.exports = app;