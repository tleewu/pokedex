(function(root) {
  'use strict';
  var PokemonDetail = root.PokemonDetail = React.createClass({
    getInitialState: function () {
      return {pokemon: {}};
    },
    getStateFromStore: function () {
      var pokemonId = parseInt(this.props.params.pokemonId);
      return PokemonStore.find(pokemonId);
    },
    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSpecificPokemon(newProps.params.pokemonId);
    },
    componentDidMount: function () {
      PokemonStore.addChangeHandler(this._changeDetail);
    },
    _changeDetail: function () {
      this.setState({pokemon: this.getStateFromStore()});
    },
    render: function () {
      if (this.state.pokemon){
        return (
          <div className = "detail">
            <img src={this.state.pokemon.image_url}/>
            <div> {this.state.pokemon.name}</div>
            <div> {this.state.pokemon.attack}</div>
            <div> {this.state.pokemon.defense}</div>
            <div> {this.state.pokemon.poke_type}</div>
            <div> {this.state.pokemon.moves}</div>
          </div>
        );
      } else {
        return (
          <div>
            Loading Pokemon
          </div>
        );
      }

    }
  });
}(this));
