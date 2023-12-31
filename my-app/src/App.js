import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Window from './components/Window';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id='app-logo' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button title="Button"></Button>
        <Window></Window>
      </header>
    </div>
  );
}

export default App;
