(function(root) {
  'use strict';
  var PokemonIndexItem = root.PokemonIndexItem = React.createClass({
    mixins: [ReactRouter.History],
    showDetail: function () {
      var pokemonURL = "pokemon/" + this.props.pokemon.id;
      this.history.pushState(null, pokemonURL);
    },
    render: function () {
      return (
        <div className = "poke-list-item" onClick = {this.showDetail}>
          {this.props.pokemon.name}
        </div>
      );
    }
  });
}(this));
