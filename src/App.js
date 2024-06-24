import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  //logic
  const name = "johnathan";
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Eat Mcdonald
        </a>
        Exit {name}
      </header>
    </div>
  );
}

export default App;
