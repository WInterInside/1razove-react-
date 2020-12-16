import "./App.scss";
import Header from "./components/header/Header";
import ErrHeader from "./components/header/ErrHeader";
import WhiteHeader from "./components/header/WhiteHeader";

import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import ProductPage from "./pages/ProductPage";
import BrandPage from "./pages/BrandPage";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrandPage />
      
      <Header />
      <WhiteHeader />
      <ErrHeader />


      <ContactsPage />
      <ProductPage />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
