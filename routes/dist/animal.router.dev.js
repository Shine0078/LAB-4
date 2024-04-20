"use strict";

var express = require('express');

var _require = require('../controllers/animal.controller'),
    viewAnimals = _require.viewAnimals,
    showEntryForm = _require.showEntryForm,
    addNewAnimal = _require.addNewAnimal,
    editAnimalForm = _require.editAnimalForm,
    updateAnimalDetails = _require.updateAnimalDetails,
    processAnimalDeletion = _require.processAnimalDeletion;

var router = express.Router(); // Middleware to serve static files from the public directory

router.use(express["static"]('public')); // Route to display all animals with pagination

router.get('/all-animals', viewAnimals); // Route to display the form for adding a new animal

router.get('/entry-form', showEntryForm); // Route to handle the submission of the new animal form

router.post('/entry-form', addNewAnimal); // Route to show the form for editing an existing animal, expects an ID

router.get('/edit-animal', editAnimalForm); // Route to handle the submission of the edited animal form

router.post('/edit-animal-details', updateAnimalDetails); // Route to handle the deletion of an animal, expects an ID

router["delete"]('/delete-animal', processAnimalDeletion); // Export the configured router

module.exports = router;
//# sourceMappingURL=animal.router.dev.js.map
