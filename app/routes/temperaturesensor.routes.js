module.exports = app => {
    const temperaturesensors = require("../controllers/temperaturesensor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Temperaturesensor
    router.post("/", temperaturesensors.create);
  
    // Retrieve all temperaturesensors
    router.get("/", temperaturesensors.findAll);
  
    // Retrieve a single Temperaturesensor with id
    router.get("/:id", temperaturesensors.findOne);
  
    // Update a Temperaturesensor with id
    router.put("/:id", temperaturesensors.update);
  
    // Delete a Temperaturesensor with id
    router.delete("/:id", temperaturesensors.delete);
  
    // Delete all temperaturesensors
    router.delete("/", temperaturesensors.deleteAll);
  
    app.use('/api/temperaturesensors', router);
  };