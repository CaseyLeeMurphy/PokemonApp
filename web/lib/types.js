
let PokeTypes;

(function() {

    let types = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
        'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
        'dragon', 'dark', 'steel', 'fairy'];

    let colors = {
        'normal': '#A8A878',
        'fire': '#F08030',
        'water': '#6890F0',
        'grass': '#78C850',
        'electric': '#F8D030',
        'ice': '#98D8D8',
        'fighting': '#C03028',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'flying': '#A890F0',
        'psychic': '#F85888',
        'bug': '#A8B820',
        'rock': '#B8A038',
        'ghost': '#705898',
        'dragon': '#7038F8',
        'dark': '#705848',
        'steel': '#B8B8D0',
        'fairy': '#EE99AC'
    };

    let atkgraph = {
        'normal': {
            'rock': 'resist',
            'ghost': 'immune',
            'steel': 'resist'
        },

        'fire': {
            'fire': 'resist',
            'water': 'resist',
            'grass': 'weak',
            'ice': 'weak',
            'bug': 'weak',
            'rock': 'resist',
            'dragon': 'resist',
            'steel': 'weak'
        },

        'water': {
            'fire': 'weak',
            'water': 'resist',
            'grass': 'resist',
            'ground': 'weak',
            'rock': 'weak',
            'dragon': 'resist'
        },

        'electric': {
            'water': 'weak',
            'electric': 'resist',
            'grass': 'resist',
            'ground': 'immune',
            'flying': 'weak',
            'dragon': 'resist'
        },

        'grass': {
            'fire': 'resist',
            'water': 'weak',
            'grass': 'resist',
            'poison': 'resist',
            'ground': 'weak',
            'flying': 'resist',
            'bug': 'resist',
            'rock': 'weak',
            'dragon': 'resist',
            'steel': 'resist'
        },

        'ice': {
            'fire': 'resist',
            'water': 'resist',
            'grass': 'weak',
            'ice': 'resist',
            'ground': 'weak',
            'flying': 'weak',
            'dragon': 'weak',
            'steel': 'resist'
        },

        'fighting': {
            'normal': 'weak',
            'ice': 'weak',
            'fighting': 'resist',
            'flying': 'resist',
            'psychic': 'resist',
            'bug': 'resist',
            'rock': 'weak',
            'ghost': 'immune',
            'dark': 'weak',
            'steel': 'weak',
            'fairy': 'resist'
        },

        'poison': {
            'grass': 'weak',
            'poison': 'resist',
            'ground': 'resist',
            'rock': 'resist',
            'ghost': 'resist',
            'steel': 'immune',
            'fairy': 'weak'
        },

        'ground': {
            'fire': 'weak',
            'electric': 'weak',
            'grass': 'resist',
            'poison': 'weak',
            'flying': 'immune',
            'bug': 'resist',
            'rock': 'weak',
            'steel': 'weak'
        },

        'flying': {
            'electric': 'resist',
            'grass': 'weak',
            'fighting': 'weak',
            'bug': 'weak',
            'rock': 'resist',
            'steel': 'resist'
        },

        'psychic': {
            'fighting': 'weak',
            'poison': 'weak',
            'psychic': 'resist',
            'dark': 'immune',
            'steel': 'resist'
        },

        'bug': {
            'fire': 'resist',
            'grass': 'weak',
            'fighting': 'resist',
            'poison': 'resist',
            'flying': 'resist',
            'psychic': 'weak',
            'ghost': 'resist',
            'dark': 'weak',
            'steel': 'resist',
            'fairy': 'resist'
        },

        'rock': {
            'fire': 'weak',
            'ice': 'weak',
            'fighting': 'resist',
            'ground': 'resist',
            'flying': 'weak',
            'bug': 'weak',
            'steel': 'resist'
        },

        'ghost': {
            'normal': 'immune',
            'psychic': 'weak',
            'ghost': 'weak',
            'dark': 'resist'
        },

        'dragon': {
            'dragon': 'weak',
            'steel': 'resist',
            'fairy': 'immune'
        },

        'dark': {
            'fighting': 'resist',
            'psychic': 'weak',
            'ghost': 'weak',
            'dark': 'resist',
            'fairy': 'resist'
        },

        'steel': {
            'fire': 'resist',
            'water': 'resist',
            'electric': 'resist',
            'ice': 'weak',
            'rock': 'weak',
            'steel': 'resist',
            'fairy': 'weak'
        },

        'fairy': {
            'fire': 'resist',
            'fighting': 'weak',
            'poison': 'resist',
            'dragon': 'weak',
            'dark': 'weak',
            'steel': 'resist'
        }
    };

    function forProduct(func) {
        for (let t1 of types) {
            for (let t2 of types) {
                func(t1, t2);
            }
        }
    }

    let resgraph = {};

    for (let def of types) resgraph[def] = {};
    forProduct((atk, def) => {
        let res = atkgraph[atk][def];
        if (res) resgraph[def][atk] = res;
    });

    function getWeaknessList(type1, type2) {
        let list1 = types.includes(type1) ? resgraph[type1] : {};
        let list2 = types.includes(type2) ? resgraph[type2] : {};

        return mergeLists(list1, list2);

        function mergeLists(list1, list2) {
            let merged = {};

            for (let type of types) {
                let weakness = mergeWeakness(list1[type], list2[type]);
                if (weakness) merged[type] = weakness;
            }

            return merged;
        }

        function mergeWeakness(w1, w2) {
            if (!w1 && !w2) return null;
            if (w1 && !w2) return w1;
            if (w2 && !w1) return w2;

            if (w1 === w2) {
                if (w1 !== 'immune') return `dbl ${w1}`;
            } else {
                if (w1 === 'immune' || w2 === 'immune') return 'immune';
                return null;
            }
        }
    }

    PokeTypes = {
        names: types,
        colors,
        atkgraph,
        resgraph,
        getWeaknessList,
    }

})();


