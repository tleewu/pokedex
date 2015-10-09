(function(root) {
  'use strict';
  var ApiUtil = root.ApiUtil = {

    fetchAllPokemons: function () {
      $.ajax({
        url: 'api/pokemon',
        dataType: 'json',
        success: function (pokemons) {
          ApiActions.receiveAllPokemons(pokemons);
        }
      });
    },

    fetchSpecificPokemon: function (id) {
      $.ajax({
        url: 'api/pokemon/' + id,
        dataType: 'json',
        success: function (pokemon) {
          ApiActions.receiveOnePokemon(pokemon);
        }
      });
    }
  };
}(this));
