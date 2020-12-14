import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
