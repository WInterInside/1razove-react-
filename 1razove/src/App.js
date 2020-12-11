import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">
          А скільки пацієнтів та лікарів <span className="App-text App-text--colored">наражаються на небезпеку через неякісну обробку?</span>
        </p>
      </header>
    </div>
  );
}

export default App;
