const mongoose = require("mongoose");
const dataBaseObj = require("../config/db.config");

const artistSchema = new mongoose.Schema({
    artistid: Number,
    first_name: String,
    last_name: String,
    wiki_url: String,
    profile_url: String,
    movies: Array
});

const artists = mongoose.model("artists", artistSchema)

module.exports = artists;