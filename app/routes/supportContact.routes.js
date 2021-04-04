module.exports = app => {
    const supportContact = require("../controllers/supportContact.controller.js");
  
    var router = require("express").Router();
  
    // Create a new support contact
    router.post("/", supportContact.create);
  
    // Retrieve all support contact
    router.get("/contacts", supportContact.findAll);
  
    // Retrieve all published supportContact
    router.get("/published", supportContact.findAllPublished);
  
    // Retrieve a single support contact with id
    router.get("/:id", supportContact.findOne);
  
    // Update a support contact with id
    router.put("/:id", supportContact.update);
  
    // Delete a support contact with id
    router.delete("/:id", supportContact.delete);
  
    // Create a new support contact
    router.delete("/:id", supportContact.deleteAll);
  
    app.use('/api/supportContact', router);
  };