const mongoose = require('mongoose');

let brewerySchema = mongoose.Schema({
    name: String,
    city: String,
    state: String
});

module.exports = mongoose.model('brewery', brewerySchema);