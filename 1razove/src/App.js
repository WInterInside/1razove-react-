import "./App.scss";

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
        <Route path="/" component={HomePage} />
        <Route path="*" component={ErrorPage} />
      </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
