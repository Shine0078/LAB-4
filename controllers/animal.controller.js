const Animal = require('../models/Animal');

/**
 * Get a list of all animals and render them on the all-animals page.
 */
async function getAllAnimals(req, res) {
    try {
        const animals = await Animal.find();
        res.render('animals/all', {
            pageTitle: 'List of All Animals',
            animals: animals
        });
    } catch (error) {
        console.error('Failed to retrieve animals:', error);
        res.status(500).send('Failed to load animal data');
    }
}

/**
 * Render the form for entering a new animal.
 */
function showEntryForm(req, res) {
    res.render('animals/entry', {
        pageTitle: 'Enter New Animal'
    });
}

/**
 * Add a new animal to the database from the form submission.
 */
async function addNewAnimal(req, res) {
    try {
        const newAnimal = new Animal({ ...req.body, isTransportable: req.body.isTransportable === 'Yes' });
        await newAnimal.save();
        res.redirect('/animals');
    } catch (error) {
        console.error('Failed to save new animal:', error);
        res.status(500).send('Failed to add new animal');
    }
}

/**
 * Show details of an animal for editing.
 */
async function editAnimalForm(req, res) {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).send('Animal not found');
        }
        res.render('animals/edit', {
            pageTitle: 'Edit Animal Details',
            animal: animal
        });
    } catch (error) {
        console.error('Failed to find animal:', error);
        res.status(500).send('Failed to retrieve animal details');
    }
}

/**
 * Update an animal's details in the database.
 */
async function updateAnimalDetails(req, res) {
    try {
        const updatedData = { ...req.body, isTransportable: req.body.isTransportable === 'Yes' };
        const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!updatedAnimal) {
            return res.status(404).send('Animal not found');
        }
        res.redirect('/animals');
    } catch (error) {
        console.error('Failed to update animal:', error);
        res.status(500).send('Failed to update animal');
    }
}

/**
 * Delete an animal from the database.
 */
async function deleteAnimal(req, res) {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.redirect('/animals');
    } catch (error) {
        console.error('Failed to delete animal:', error);
        res.status(500).send('Failed to delete animal');
    }
}

// Exporting the controller functions
module.exports = {
    getAllAnimals,
    showEntryForm,
    addNewAnimal,
    editAnimalForm,
    updateAnimalDetails,
    deleteAnimal
};
