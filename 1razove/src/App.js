import "./App.scss";
import axios from 'axios';
import { useEffect } from 'react';
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import ProductPage from "./pages/ProductPage";
import BrandPage from "./pages/BrandPage";
import ErrorPage from "./pages/ErrorPage";
import { Transition, TransitionGroup } from 'react-transition-group';

import { play, exit } from './animation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  window.loadPromise = new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', resolve)
  });
  return (
    <Router>
    <div className="App">
      <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <div>
                    <Switch location={location}>
                      <Route path="/contacts" component={ContactsPage} />
                      <Route path="/product/:id" component={ProductPage} />
                      <Route path="/brand/:id" component={BrandPage} />
                      <Route path="/404" component={ErrorPage} />
                      <Route path="/" exact component={HomePage} />
                      <Redirect from='*' to='/404' />
                    </Switch>
                    
                  </div>
                </Transition>
              </TransitionGroup>
            )
          }}/>


    </div>
    </Router>
  );
}

export default App;
