/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import NavBar from './components/NavBar';
import TemplatePage from './components/TemplatePage';
import Home from './Pages/Home';
import Filmes from './Pages/Filmes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/filmes">
            <Filmes />
          </Route>

          <Route path="/series">
            <div>
              <p> Página do series</p>
            </div>
          </Route>

          <Route path="/documentarios">
            <div>
              <p> Página de documentarios</p>
            </div>
          </Route>

          <Route path="/shows">
            <div>
              <p> Página de Shows</p>
            </div>
          </Route>

          <Route path="/blog">
            <div>
              <p> Página do Blog</p>
            </div>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
