import logo from "./logo.svg";
import headshot from "./headshot.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="App-logo" alt="logo" />
        <p>Finn Farrell, 20 Years old.</p>
        <p>
          Student of Computer Science, Linguistics and Spanish in Trinity
          College Dublin.
        </p>
        <a
          className="LinkedIn"
          href="https://www.linkedin.com/in/finn-farrell-428690276/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="GitHub"
          href="https://github.com/fifarrel"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
