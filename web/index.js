// ------------------------------ Declare global variables -------------------------------
// ---------------------------------------------------------------------------------------
var app = angular.module('pokemonApp', ['ngMaterial']);
app.controller('pokeMainController', function($scope, $http){
    $scope.teamMembers = [];
    $scope.pokemonNames = [];
    
    $scope.getPokemonDetails = function(pokemonID) {
        $http.get('api/v1/pokemon/' + pokemonID.toLowerCase()).then(function(result) {
            $scope.stagedPokemon = result.data;
        },function(err) {
            console.log('There was an error: ' + err);
        })
    }

    $http.get('api/v1/pokemon').then(function(response) {
        $scope.pokemonNames = response.data.pokemon.map((singlePokemon) => (singlePokemon.name));
    }, function() {
        console.log('There was a problem getting the pokemon name');
    })

    $scope.addToParty = function(pokemonDetails) {
        $scope.teamMembers.push(JSON.parse(JSON.stringify(pokemonDetails)));
    }

    $scope.removeFromParty = function(pokemonIndex) {
        $scope.teamMembers.splice(pokemonIndex, 1);
    }

    $scope.getMatches = function(searchString){
        return pokemonNames.filter((pokemon) => pokemon.startsWith(searchString));
    }
});
