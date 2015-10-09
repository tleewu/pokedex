(function(root) {
  'use strict';
  var ApiActions = root.ApiActions = {

    receiveAllPokemons: function(pokemons){
      AppDispatcher.dispatch({
        actionType: PokemonConstants.ALL_POKEMONS,
        pokemons: pokemons
      });
    },

    receiveOnePokemon: function(pokemon) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.ONE_POKEMON,
        pokemon: pokemon
      });
    }
  };
}(this));
