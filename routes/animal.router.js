const express = require('express');
const {
    viewAnimals,
    showNewAnimalForm,
    processNewAnimal,
    showEditAnimalForm,
    processAnimalUpdate,
    processAnimalDeletion
} = require('../controllers/animal.controller');

const router = express.Router();

// Middleware to serve static files from the public directory
router.use(express.static('public'));

// Route to display all animals with pagination
router.get('/all-animals', viewAnimals);

// Route to display the form for adding a new animal
router.get('/entry-form', showNewAnimalForm);

// Route to handle the submission of the new animal form
router.post('/entry-form', processNewAnimal);

// Route to show the form for editing an existing animal, expects an ID
router.get('/edit-animal', showEditAnimalForm);

// Route to handle the submission of the edited animal form
router.post('/edit-animal-details', processAnimalUpdate);

// Route to handle the deletion of an animal, expects an ID
router.delete('/delete-animal', processAnimalDeletion);

// Export the configured router
module.exports = router;
