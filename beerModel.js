const mongoose = require('mongoose');

let beerSchema = mongoose.Schema({
    name: String,
    abv: Number,
    style: String,
    brewery_id: Number,
    ounces: Number
});

let Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;