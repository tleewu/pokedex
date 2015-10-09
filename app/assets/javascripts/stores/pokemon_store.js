(function(root) {
  'use strict';

  var _pokemons = [], CHANGE_EVENT = "CHANGE";

  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
    PokemonStore.changed();
  };

  var PokemonStore = root.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    resetPokemons: function (pokemons) {
      _pokemons = pokemons;
    },

    addChangeHandler: function (handler) {
      PokemonStore.on(CHANGE_EVENT, handler);
    },

    removeChangeHandler: function (handler) {
      PokemonStore.removeListener(CHANGE_EVENT, handler);
    },

    changed: function () {
      PokemonStore.emit(CHANGE_EVENT);
    },

    find: function (id) {
      var found;
      _pokemons.map (function (pokemon) {
        if (pokemon.id === id) {
          found = pokemon;
        }
      });
      return found;
    },

    dispatcherId: AppDispatcher.register(function(action) {
      switch(action.actionType){
        case PokemonConstants.ALL_POKEMONS:
          resetPokemons(action.pokemons);
          break;
        case PokemonConstants.ONE_POKEMON:
          PokemonStore.changed();
          break;
      }
    })

  });


}(this));
