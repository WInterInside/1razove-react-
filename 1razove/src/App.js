import "./App.scss";
import React from 'react';
// import HomePageWrapper from "./pages/HomePageWrapper";
// import ContactsPageWrapper from "./pages/ContactsPageWrapper";
// import ProductPageWrapper from "./pages/ProductPageWrapper";
// import BrandPageWrapper from "./pages/BrandPageWrapper";
// import ErrorPageWrapper from "./pages/ErrorPageWrapper";

import HomePageWrapper from "./pages/HomePageWrapper";
import ContactsPageWrapper from "./pages/ContactsPageWrapper";
import ProductPageWrapper from "./pages/ProductPageWrapper";
import BrandPageWrapper from "./pages/BrandPageWrapper";
import ErrorPageWrapper from "./pages/ErrorPageWrapper";

import { Transition, TransitionGroup } from 'react-transition-group';

import { play, exit } from './animation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import dataStore from "./stores/dataStore";

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
                  {/* <Suspense fallback={<div></div>}> */}
                    <Switch location={location}>
                      <Route path="/:lang/contacts" component={ContactsPageWrapper} />
                      <Route path="/:lang/product/:id" component={ProductPageWrapper} />
                      <Route path="/:lang/brand/:id" component={BrandPageWrapper} />
                      <Route path="/:lang/404" component={ErrorPageWrapper} />
                      <Route path="/:lang" exact component={HomePageWrapper} />
                      <Redirect path="/" to="/ua" />
                      <Redirect from='*' to='/404' />
                    </Switch>
                    {/* </Suspense> */}
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
