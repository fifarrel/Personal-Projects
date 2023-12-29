import logo from './logo.svg';
import logo2 from './ball.png';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'beige'}}>
      
      <h1>Hello world</h1>
      <h2>We are taking control of your mind</h2>
      <header style={{backgroundColor: '#ba6f4e'}} className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        
        <p1 >Welcome to Cairo</p1>
        <a
          className="App-link"
          href = "https://magic-8ball.com/"
          //href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter your faith.. if you dare !!
        </a>
      </header>
    </div>
  );
}

export default App;
