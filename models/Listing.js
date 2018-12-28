const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    name: String
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing