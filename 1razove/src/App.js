import "./App.scss";
import Header from "./components/header/Header";
import ErrHeader from "./components/header/ErrHeader";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      // <ErrHeader />
      
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
