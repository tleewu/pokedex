(function(root) {
  'use strict';

  var PokemonsIndex = root.PokemonsIndex = React.createClass({
    getInitialState: function () {
      return ({pokemons: PokemonStore.all() });
    },
    _pokeChange: function () {
      this.setState({pokemons: PokemonStore.all() });
    },
    componentDidMount: function () {
      PokemonStore.addChangeHandler(this._pokeChange);
      ApiUtil.fetchAllPokemons();
    },
    componentWillUnmount: function () {
      PokemonStore.removeChangeHandler(this._pokeChange);
    },
    render: function () {
      // debugger;
      return (
        <ul>
          {
            this.state.pokemons.map (function (pokemon){
              return (<li> <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/></li>);
            })
          }
        </ul>
      );
    }

  });

}(this));
