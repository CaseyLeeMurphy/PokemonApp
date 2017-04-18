// ------------------------------ Declare global variables -------------------------------
// ---------------------------------------------------------------------------------------
var app = angular.module('pokemonApp', ['ngMaterial']);
app.controller('pokeMainController', function($scope, $http){
   $scope.getPokemonDetails = function(pokemonID) {
       $http.get('api/v1/pokemon/' + pokemonID).then(function(result) {
            $scope.stagedPokemon = result.data;
       },function(err) {
            console.log('There was an error: ' + err);
       })
   }
});
