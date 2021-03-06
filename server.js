const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models/index');
const moviesRoutes = require('./routes/movie.routes');
const artistsRoutes = require('./routes/artist.routes');
const genresRoutes = require('./routes/genre.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = 8085;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(moviesRoutes);
app.use(artistsRoutes);
app.use(genresRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => {
    console.log("Connected to the database!");
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
});

app.listen(port, () => {
    console.log(`App started at ${port} port`);
});