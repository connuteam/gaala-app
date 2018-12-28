const listingRouter = require('express').Router()
const Listing = require('../models/Listing')

listingRouter.get('/', async (request, response) => {
    const listings = await Listing
        .find({})

    response.json(listings)
})

listingRouter.post('/', async (request, response) => {
    try {
        const listing = new Listing({
            name: "testi"
        })

        const savedListing = await listing.save()

        response.status(201).json(savedListing)
    } catch (exception) {
        console.log(exception)
        response.status(500).json({ error: 'something went wrong...' })
    }
})

module.exports = listingRouter