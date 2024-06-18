const express = require('express')
const voitureModel = require('./models/voiture.model')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Bonjour Bootcamp React!')
})

route.post('/createVoiture', async (req, res) => {
    try {
        const voiture = await voitureModel.create(req.body)
        console.log(req.body);
        res.status(200).json(voiture)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
        
    }
})

module.exports = route;