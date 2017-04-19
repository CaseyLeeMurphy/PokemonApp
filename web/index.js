// ------------------------------ Declare global variables -------------------------------
// ---------------------------------------------------------------------------------------
var app = angular.module('pokemonApp', ['ngMaterial']);
app.controller('pokeMainController', function($scope, $http, $mdDialog){
    $scope.teamMembers = [];
    $scope.pokemonNames = [];
    
    $scope.getPokemonDetails = function(pokemonID) {
        $http.get('api/v1/pokemon/' + pokemonID.toLowerCase()).then(function(result) {
            let pokemon = result.data;
            let sprites = pokemon.sprites;
            
            Object.keys(sprites).map((key) => {
                let value = sprites[key];
                if (typeof value === 'string')
                    sprites[key] = value.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/', 'sprites/');
            });

            $scope.stagedPokemon = pokemon;

            let ctx = document.getElementById('stats-chart');
            let statsChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: $scope.stagedPokemon.stats.map((singleStat) => {
                        return singleStat.stat.name;
                    }),
                    datasets: [
                        {
                            label: "Pokemon Stats",
                            backgroundColor: "rgba(179,181,198,0.2)",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: $scope.stagedPokemon.stats.map((singleStat) => {
                                return singleStat.base_stat;
                            })
                        }
                    ]
                },
                options: {}
            });
        },function(err) {
            console.log('There was an error: ' + err);
        })
    };

    $http.get('api/v1/pokemon').then(function(response) {
        $scope.pokemonNames = response.data.pokemon.map(singlePokemon => singlePokemon.name);
    }, function() {
        console.log('There was a problem getting the pokemon name');
    });

    $scope.addToParty = function(pokemonDetails) {
        $scope.teamMembers.push(JSON.parse(JSON.stringify(pokemonDetails)));
    };

    $scope.removeFromParty = function(pokemonIndex) {
        $scope.teamMembers.splice(pokemonIndex, 1);
    };

    $scope.getMatches = function(searchString) {
        return $scope.pokemonNames.filter((pokemon) => pokemon.startsWith(searchString));
    };

    $scope.showDetails = function(event, pokemon, inParty, index) {
        function DetailsDialogController($scope, $mdDialog) {
            $scope.pokemon = pokemon;
            $scope.inParty = inParty;
            $scope.index = index;

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        $mdDialog.show({
            controller: DetailsDialogController,
            templateUrl: 'details.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose:true
        }).then(function(answer) {
            if (answer.add === true)
                $scope.addToParty(answer.pokemon);
            else
                $scope.removeFromParty(answer.index);
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };

});
