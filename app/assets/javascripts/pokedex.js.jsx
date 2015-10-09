$(function() {
  'use strict';

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var Index = React.createClass({
    render: function () {
      return (
        <div>
          <div className="pokemon-index"><PokemonsIndex/></div>
          {this.props.children}
        </div>
      );
    }
  });

// debugger;
  var routes = (
    <Route path="/" component={Index}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail} />
    </Route>
  );

  React.render(<Router>{routes}</Router>,
                document.getElementById("pokedex"));
});
