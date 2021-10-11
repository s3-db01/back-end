const db = require("../models");
const Temperaturesensor = db.temperaturesensors;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    //validate request
    console.log(req.body.name);
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    //create temperaturesensor
    const sensor = {
        name: req.body.name,
        description: req.body.description,
        temperature: req.body.temperature,
    };

    Temperaturesensor.create(sensor)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating the temperature sensor log",
            });
        })
};

// Retrieve all sensors from the database.
exports.findAll = (req, res) => {
    
    Temperaturesensor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving sensor logs."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Temperaturesensor.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find sensordata with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving sensordata with id=" + id
        });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};