// ----------------------------------- Neccessary modules ----------------------------------------
const express = require('express');
const Pokedex = require('pokedex-promise-v2');
const pokemonList = require('../data/pokemonList.json');

// Initialize the pokedex. This is used for caching and to provide move immediate results
const P = new Pokedex();
var router = express.Router();
module.exports = router;

// ----------------------------------- REST end points --------------------------------------------
// ------------------------------------------------------------------------------------------------

// --------------------------------------- Post ---------------------------------------------------
// ------------------------------------------------------------------------------------------------


// ---------------------------------------- Get ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
router.get("/api/v1/pokemon/:id", function(req, res) {
    var id = req.params.id;

    P.getPokemonByName(id)
    .then(function(response) {
      res.send(response);
    })
    .catch(function(error) {
      res.status(500).send(error);
    });
});

router.get("/api/v1/pokemon", function(req, res) {
    res.send(pokemonList);
});

router.get("/api/v1/move/:id", function(req, res) {
    P.getMoveByName(req.params.id)
    .then(function(response) {
        res.send(response);
    })
    .catch(function(error) {
        res.status(500).send(error);
    });
});

// --------------------------------------- Update/Put ---------------------------------------------
// ------------------------------------------------------------------------------------------------

// --------------------------------------- Delete -------------------------------------------------
// ------------------------------------------------------------------------------------------------

// --------------------------------------- List ---------------------------------------------------
// ------------------------------------------------------------------------------------------------