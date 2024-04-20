"use strict";

//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment
var express = require('express');

var _require = require('../controllers/animal.controller'),
    viewAnimals = _require.viewAnimals,
    showNewAnimalForm = _require.showNewAnimalForm,
    processNewAnimal = _require.processNewAnimal,
    showEditAnimalForm = _require.showEditAnimalForm,
    processAnimalUpdate = _require.processAnimalUpdate,
    processAnimalDeletion = _require.processAnimalDeletion;

var router = express.Router(); // Middleware to serve static files from the public directory

router.use(express["static"]('public')); // Route to display all animals with pagination

router.get('/all-animals', viewAnimals); // Route to display the form for adding a new animal

router.get('/entry-form', showNewAnimalForm); // Route to handle the submission of the new animal form

router.post('/entry-form', processNewAnimal); // Route to show the form for editing an existing animal, expects an ID

router.get('/edit-animal', showEditAnimalForm); // Route to handle the submission of the edited animal form

router.post('/edit-animal-details', processAnimalUpdate); // Route to handle the deletion of an animal, expects an ID

router["delete"]('/delete-animal', processAnimalDeletion); // Export the configured router

module.exports = router;
//# sourceMappingURL=animal.router.dev.js.map
