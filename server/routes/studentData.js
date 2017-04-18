// ----------------------------------- Neccessary modules ----------------------------------------
const studentData = require('../data/studentsMongoDao');
const express = require('express');
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
router.get("/api/v1/students/:id", function(req, res) {
    var id = req.params.id;

    studentData.read(id, (err, result) => {
        if (err) {
            res.status(500).send("There was a problem reading that ID from the database");
        } else {
            res.status(201).send(result);
        }    
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