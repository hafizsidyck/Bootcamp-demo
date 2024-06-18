const mongoose = require('mongoose')

const voitureSchema = mongoose.Schema({
    make: {
        type: String,
        required: [true, 'maker obligatoire']
    },
    model: {
        type: String,
        required: [true, 'model obligatoire']
    },
    year: {
        type: Date,
        required: [true, 'ajouter année']
    },
    transmission: {
        type: String,
        required: [true, 'transmission  obligatoire']
    },
    fuelType: {
        type: String,
        required: [true, 'fuelType  obligatoire']

    },
    mileage: {
        type: Number,
        required: [true, ' mileage  obligatoire']
    },
    price: {
        type: Number,
        required: [true, ' ajouter un prix']
    },
    sales: {
        type: Number,
        required: [true, ' sales  obligatoire']
    },
    country: {
        type: String,
        required: [true, ' ajouter un pays']
    },
    inStock: {
        type: Boolean
    }
})

const voitureModel = mongoose.model('voitures', voitureSchema)

module.exports = voitureModel;