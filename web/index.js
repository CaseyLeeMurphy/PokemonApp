// ------------------------------ Declare global variables -------------------------------
// ---------------------------------------------------------------------------------------
var app = angular.module('pokemonApp', ['ngMaterial', 'ngAnimate']);
app.controller('pokeMainController', function($scope, $http, $mdDialog, $mdToast){
    $scope.teamMembers = (typeof localStorage.getItem("teamMembers")) === "string" ? JSON.parse(localStorage.getItem("teamMembers")) : [];
    $scope.pokemonNames = [];
    $scope.loadingPokemon = false;
    $scope.MAX_POKEMON = 6;
    
    $scope.getPokemonDetails = function(pokemonID) {
        $scope.loadingPokemon = true;
        $http.get('api/v1/pokemon/' + pokemonID.toLowerCase()).then(function(result) {
            let pokemon = result.data;
            let sprites = pokemon.sprites;
            
            Object.keys(sprites).map((key) => {
                let value = sprites[key];
                if (typeof value === 'string')
                    sprites[key] = value.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/', 'sprites/');
            });

            $scope.loadingPokemon = false;
            $scope.stagedPokemon = pokemon;
        },function(err) {
            showSimpleToast("Please enter a valid pokemon name");
            $scope.loadingPokemon = false;
        })
    };

    $http.get('api/v1/pokemon').then(function(response) {
        $scope.pokemonNames = response.data.pokemon.map(singlePokemon => singlePokemon.name);
    }, function() {
        console.log('There was a problem getting the pokemon name');
    });

    $scope.addToParty = function(pokemonDetails) {
        if ($scope.teamMembers.length < $scope.MAX_POKEMON) {
            $scope.teamMembers.push(JSON.parse(JSON.stringify(pokemonDetails)));
            localStorage.setItem("teamMembers", JSON.stringify($scope.teamMembers));
        } else {
            showSimpleToast("You can't have more than 6 pokemon in your team");
        }
    };

    $scope.removeFromParty = function(pokemonIndex) {
        $scope.teamMembers.splice(pokemonIndex, 1);
        localStorage.setItem("teamMembers", JSON.stringify($scope.teamMembers));
    };

    $scope.getMatches = function(searchString) {
        return $scope.pokemonNames.filter((pokemon) => pokemon.toLowerCase().startsWith(searchString));
    };

    $scope.showDetails = function(event, pokemon, inParty, index) {
        function DetailsDialogController($scope, $mdDialog) {
            $scope.pokemon = pokemon;
            $scope.inParty = inParty;
            $scope.index = index;

            // Pull out the pokemon type information
            $scope.type1 = pokemon.types.find(t => t.slot === 1).type.name;
            let type2 = pokemon.types.find(t => t.slot === 2);
            $scope.type2 = type2 ? type2.type.name : null;

            // Get style for pokemon type
            $scope.type1Style = { backgroundColor: PokeTypes.colors[$scope.type1], color: 'black'};
            $scope.type2Style = { backgroundColor: type2 ? PokeTypes.colors[$scope.type2] : null, color: 'black'};
            
            // Get weaknesses
            let strengthAndWeaknesses = PokeTypes.getWeaknessList($scope.type1, $scope.type2);
            $scope.weaknesses = Object.keys(strengthAndWeaknesses)
                .filter((key) => strengthAndWeaknesses[key] === "weak")
                .map(key => ({
                    type: key, 
                    style: {
                        backgroundColor: PokeTypes.colors[key], 
                        color: 'black'
                    }
                }));

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

        function showStatsChart() {
            let ctx = document.getElementById('stats-chart');
            let statsLabels = pokemon.stats.map((singleStat) => (singleStat.stat.name));
            let statsData = pokemon.stats.map((singleStat) => (singleStat.base_stat));
            let statsChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: statsLabels,
                    datasets: [
                        {
                            label: "Stats",
                            backgroundColor: "rgba(179,181,198,0.2)",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: statsData
                        }
                    ]
                },
                backgroundColor:"rgb(0, 204, 0, 0.2)",
                options: {
                    legend: {
                        display:false
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            max:250
                        },
                        pointLabels:{
                            fontSize: 15
                        }
                    }
                }
            });
        }

        $mdDialog.show({
            controller: DetailsDialogController,
            templateUrl: 'details.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose:true,
            onComplete: showStatsChart
        }).then(function(answer) {
            if (answer.add === true)
                $scope.addToParty(answer.pokemon);
            else
                $scope.removeFromParty(answer.index);
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function showSimpleToast(message) {
        desiredLocation = {
            bottom: false,
            top: true,
            left: false,
            right: true
        }

        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .position("top right")
                .hideDelay(3000)
        );
    }

});
