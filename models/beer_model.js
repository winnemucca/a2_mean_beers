const mongoose = require('mongoose');

let beerSchema = mongoose.Schema({
    name: String,
    abv: Number,
    style: String,
    brewery_id: Number,
    ounces: Number
});

module.exports = mongoose.model('beer', beerSchema);