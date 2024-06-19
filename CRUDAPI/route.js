const express = require("express");
const voitureModel = require("./models/voiture.model");
const route = express.Router();

//route pour get avoir la liste de toute les voitures

route.get("/", (req, res) => {
  res.send("Bonjour Bootcamp React!");
});

route.get("/listeVoiture", async (req, res) => {
  try {
    const listeVoiture = await voitureModel.find({});
    res.status(200).json(listeVoiture);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get('/voiture/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(req.params);
        const voitureId = await voitureModel.findbyId(id)
        res.status(200).json(voitureId)
    } catch (error) {
        console.log(error);
    res.status(500).json({
      message: error.message,
    });
        
    }
})

//route pour creer une voiture

route.post("/createVoiture", async (req, res) => {
  try {
    const voiture = await voitureModel.create(req.body);
    console.log(req.body);
    res.status(200).json(voiture);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

//route pour modifier les info d'une voiture

route.put('/modifierVoiture/:id',async (req, res) => {
    try {
        const {id} = req.params;
        const modifierVoiture = await voitureModel.findByIdAndUpdate(id, req.body)
        if (!modifierVoiture) {
            return res.status(400).json({
                message: `je ne peux pas trouver la voiture avec l'id ${id}`
            })
        }
        res.status(200).json(modifierVoiture)
    } catch (error) {
        console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
        
    }
})

//route pour supprimer les info d'une voiture

route.delete('/supprimerVoiture/:id',async (req, res) => {
    try {
        const {id} = req.params;
        const supprimerVoiture = await voitureModel.findByIdAndDelete(id)
        if (!supprimerVoiture) {
            return res.status(404).json({
                message: `je ne peux pas trouver la voiture avec l'id ${id}`
            })
        }
        res.status(200).json(supprimerVoiture)
    } catch (error) {
        console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
        
    }
})

module.exports = route;
