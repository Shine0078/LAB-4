"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment
var Animal = require('../models/Animal');
/**
 * Get a list of all animals and render them on the all-animals page.
 */


function viewAnimals(req, res) {
  var animals;
  return regeneratorRuntime.async(function viewAnimals$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Animal.find());

        case 3:
          animals = _context.sent;
          res.render('animals/all-animals', {
            pageTitle: 'List of All Animals',
            animals: animals
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Failed to retrieve animals:', _context.t0);
          res.status(500).send('Failed to load animal data');

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
/**
 * Render the form for entering a new animal.
 */


function showEntryForm(req, res) {
  res.render('animals/entry-form', {
    pageTitle: 'Enter New Animal'
  });
}
/**
 * Add a new animal to the database from the form submission.
 */


function addNewAnimal(req, res) {
  var newAnimal;
  return regeneratorRuntime.async(function addNewAnimal$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          newAnimal = new Animal(_objectSpread({}, req.body, {
            isTransportable: req.body.isTransportable === 'Yes'
          }));
          _context2.next = 4;
          return regeneratorRuntime.awrap(newAnimal.save());

        case 4:
          res.redirect('animals/entry-form');
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error('Failed to save new animal:', _context2.t0);
          res.status(500).send('Failed to add new animal');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
/**
 * Show details of an animal for editing.
 */


function editAnimalForm(req, res) {
  var animal;
  return regeneratorRuntime.async(function editAnimalForm$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Animal.findById(req.params.id));

        case 3:
          animal = _context3.sent;

          if (animal) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).send('Animal not found'));

        case 6:
          res.render('animals/eedit-animal', {
            pageTitle: 'Edit Animal Details',
            animal: animal
          });
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error('Failed to find animal:', _context3.t0);
          res.status(500).send('Failed to retrieve animal details');

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}
/**
 * Update an animal's details in the database.
 */


function updateAnimalDetails(req, res) {
  var updatedData, updatedAnimal;
  return regeneratorRuntime.async(function updateAnimalDetails$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          updatedData = _objectSpread({}, req.body, {
            isTransportable: req.body.isTransportable === 'Yes'
          });
          _context4.next = 4;
          return regeneratorRuntime.awrap(Animal.findByIdAndUpdate(req.params.id, updatedData, {
            "new": true
          }));

        case 4:
          updatedAnimal = _context4.sent;

          if (updatedAnimal) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).send('Animal not found'));

        case 7:
          res.redirect('animals/edit-animal-details');
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('Failed to update animal:', _context4.t0);
          res.status(500).send('Failed to update animal');

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
}
/**
 * Delete an animal from the database.
 */


function processAnimalDeletion(req, res) {
  return regeneratorRuntime.async(function processAnimalDeletion$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Animal.findByIdAndDelete(req.params.id));

        case 3:
          res.redirect('animals/delete-animal');
          _context5.next = 10;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          console.error('Failed to delete animal:', _context5.t0);
          res.status(500).send('Failed to delete animal');

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
} // Exporting the controller functions


module.exports = {
  viewAnimals: viewAnimals,
  showEntryForm: showEntryForm,
  addNewAnimal: addNewAnimal,
  editAnimalForm: editAnimalForm,
  updateAnimalDetails: updateAnimalDetails,
  processAnimalDeletion: processAnimalDeletion
};
//# sourceMappingURL=animal.controller.dev.js.map
