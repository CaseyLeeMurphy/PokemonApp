// ----------------------------------- Neccessary modules ----------------------------------------
const studentData = require('../data/pokemonMongoDao');
const express = require('express');
const Pokedex = require('pokedex-promise-v2');

// var options = {
//   protocol: 'http',
//   hostName: 'pokeapi.co',
//   versionPath: '/api/v2/',
//   cacheLimit: 100 * 1000, // 100s
//   tiemout: 5 * 1000 // 5s
// }
// const P = new Pokedex(options);

const P = new Pokedex();
var router = express.Router();
module.exports = router;

// ----------------------------------- REST end points --------------------------------------------
// ------------------------------------------------------------------------------------------------

// --------------------------------------- Post ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
router.post("/api/v1/students", function (req, res) {
    studentData.post(req.body, (err, result) => {
        if (err) {
            res.status(500).send("There was a problem inserting that record into the database");
        } else {
            console.log("Inserted student with newID of " + result);
            res.status(200).send(result);
        }    
    });
});

// ---------------------------------------- Get ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
router.get("/api/v1/pokemon/:id", function(req, res) {
    var id = req.params.id;

    P.getPokemonByName(id)
    .then(function(response) {
      res.status(201).send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

// --------------------------------------- Update/Put ---------------------------------------------
// ------------------------------------------------------------------------------------------------
router.put("/api/v1/students/:id", function (req, res) {
    var id = req.params.id;
    var data = req.body;
    
    studentData.update(id, data, (err, result) => {
        if (err) {
            res.status(500).send("There was a problem updating that ID in the database");
        } else {
            console.log("Updated student with ID" + id);
            res.status(204).send();
        }    
    });
});

// --------------------------------------- Delete -------------------------------------------------
// ------------------------------------------------------------------------------------------------
router.delete("/api/v1/students/:id", function (req, res) {
    var id = req.params.id;

    studentData.delete(id, (err, result) => {
        if (err) {
            res.status(500).send("There was a problem deleting that ID from the database");
        } else {
            console.log("Deleted student with ID" + id);
            res.status(204).send();
        }    
    });
});

// --------------------------------------- List ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
router.get("/api/v1/students", function(req, res) {
    studentData.list((err, result) => {
        if (err) {
            res.status(500).send("There was a problem getting students from the database");
        } else {
            res.status(201).send(result);
        }    
    });
});