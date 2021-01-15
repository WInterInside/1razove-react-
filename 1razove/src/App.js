import "./App.scss";
import axios from 'axios';
import React, { Suspense, useEffect } from 'react';
// import HomePage from "./pages/HomePage";
// import ContactsPage from "./pages/ContactsPage";
// import ProductPage from "./pages/ProductPage";
// import BrandPage from "./pages/BrandPage";
// import ErrorPage from "./pages/ErrorPage";

import { Transition, TransitionGroup } from 'react-transition-group';

import { play, exit } from './animation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import dataStore from "./stores/dataStore";


const HomePage = React.lazy(() => import('./pages/HomePage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const BrandPage = React.lazy(() => import('./pages/BrandPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
function App() {
  window.loadPromise = new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', resolve)
  });
  return (
    <Router>
    <div className="App">
      <Route render={({ location }) => {
            const { pathname, key } = location;

            let urlArray = location.pathname.split("/").filter(x => !!x);
            urlArray = urlArray.length ? urlArray : ['ua'];
            switch(urlArray[0]){
              case "ua": 
                dataStore.setLang('ua');
                break;
              case "en": 
                dataStore.setLang('en');
                break;
              case "ru": 
                dataStore.setLang('ru');
                break;
              default: 
                dataStore.setLang('ua');
                window.location.href = "/ua/404";
                break;
            }
            

            console.log(`location - ${JSON.stringify(location)}`);
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
                  <Suspense fallback={<div></div>}>
                    <Switch location={location}>
                      <Route path="/:lang/contacts" component={ContactsPage} />
                      <Route path="/:lang/product/:id" component={ProductPage} />
                      <Route path="/:lang/brand/:id" component={BrandPage} />
                      <Route path="/:lang/404" component={ErrorPage} />
                      <Route path="/:lang" exact component={HomePage} />
                      <Redirect path="/" to="/ua" />
                      <Redirect from='*' to='/404' />
                    </Switch>
                    </Suspense>
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
