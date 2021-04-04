const db = require("../models");
const supportContact = db.supportcontacts;

// Create and Save a new supportContact
exports.create = (req, res) => {
    // Validate request
  if (!req.body.nombreC || !req.body.nombreE ||
    !req.body.email || !req.body.telefono ||
    !req.body.categoria || !req.body.mensaje) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a supportContact
  const supportcontact = new supportContact({
    contactName: req.body.nombreC,
    factoryName: req.body.nombreE,
    email: req.body.email,
    phone: req.body.telefono,
    category: req.body.categoria,
    message: req.body.mensaje,
  });

  // Save supportContact in the database
  supportcontact
    .save(supportcontact)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the support contact."
      });
    });
};

// Retrieve all supportContact from the database.
exports.findAll = (req, res) => {
  
};

// Find a single supportContact with an id
exports.findOne = (req, res) => {
  
};

// Update a supportContact by the id in the request
exports.update = (req, res) => {
  
};

// Delete a supportContact with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all supportContact from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published supportContact
exports.findAllPublished = (req, res) => {
  
};