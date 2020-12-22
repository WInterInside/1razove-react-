import "./App.scss";
import axios from 'axios';
import { useEffect } from 'react';
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import ProductPage from "./pages/ProductPage";
import BrandPage from "./pages/BrandPage";
import ErrorPage from "./pages/ErrorPage";

import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">

      <Switch>
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/brand/:id" component={BrandPage} />
        <Route path="/404" component={ErrorPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect from='*' to='/404' />
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
