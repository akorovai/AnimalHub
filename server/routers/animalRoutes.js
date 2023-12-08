const express = require("express");
const animalController = require('../controllers/animalController');

const animalRoutes = express.Router();

animalRoutes.get("/", async (request, response) => {
    try {
        const result = await animalController.showHomePage();
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

animalRoutes.get('/animals', async (request, response) => {
    try {
        const result = await animalController.getAnimalsList();
        response.json(result);
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

animalRoutes.get('/add', (request, response) => {
    const viewPath = animalController.addAnimal();
    response.render(viewPath);
});

animalRoutes.post('/animals/post', async (request, response) => {
    try {
        const result = await animalController.postAnimal(request.body);
        response.redirect(result);
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

animalRoutes.get('/animals/:animalId', async (request, response) => {
    try {
        const result = await animalController.getAnimal(request.params.animalId);
        if (typeof result === 'string') {
            response.redirect(result);
        } else {
            response.json(result);
        }
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

animalRoutes.delete('/animals/:animalId', async (request, response) => {
    try {
        await animalController.deleteAnimalById(request.params.animalId);
        response.status(204).send();
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

animalRoutes.put('/animals/modify/:animalId', async (request, response) => {
    try {
        await animalController.modifyAnimal(request.params.animalId, request.body);
        response.status(200).send('Animal modified successfully');
    } catch (error) {
        response.status(500).json({ error: error.error });
    }
});

module.exports = animalRoutes;
