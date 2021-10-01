import React from "react";
import {Switch, Route} from "react-router-dom";
import Helloworld from "./pages/Helloworld";
import Paginainicial from "./pages/Paginainicial";
import Array from "./pages/Array";
import Objetos from "./pages/Objetos";
import Tabela from "./pages/Tabela";
import Estados from "./pages/Estados";
import FilmesPopulares from "./pages/filmes/FilmesPopulares";
import FilmesDetalhes from "./pages/filmes/FilmesDetalhes";
import AtoresDetalhes from "./pages/atores/AtoresDetalhes";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/hello" component={Helloworld} />
      <Route exact path="/principal" component={Paginainicial} />
      <Route exact path="/array" component={Array} />
      <Route exact path="/objetos" component={Objetos} />
      <Route exact path="/tabela" component={Tabela} />
      <Route exact path="/estados" component={Estados} />
      <Route exact path="/filmes/populares" component={FilmesPopulares} />
      <Route exact path="/filmes/:id" component={FilmesDetalhes} />
      <Route exact path="/atores/:id" component={AtoresDetalhes} />
    </Switch>
  );
};

export default Routes;
